import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// Add the images column to the meals table
// db.exec("ALTER TABLE meals ADD COLUMN images TEXT");

export async function getMeals() {
  await new Promise((resolve) => {
    console.warn("Fetching all meals data on getMeals.js");

    // this will be caught by the error boundary
    // throw new Error("Failed to fetch meals data");
    setTimeout(resolve, 1000);
  });

  const meals = db.prepare("SELECT * FROM meals").all();
  return meals.map((meal) => ({
    ...meal,
    images: meal.images.split(","), // Convert the comma-separated string back to an array
  }));
}

// ? is a placeholder for the value of the slug , and it will be replaced by the value of the slug, and it will protect the query from SQL injection
export function getMealBySlug(slug) {
  console.warn("getMealBySlug(slug) on getMeals.js");
  // await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  // .get(slug) will return a single row of data that matches the slug and will replace the ? with the value of the slug
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return {
    ...meal,
    images: meal.images.split(","), // Convert the comma-separated string back to an array
  };
}

//  return db.prepare("SELECT * FROM meals WHERE slug = " + slug).get(slug); it is insecure ,and it is vulnerable to SQL injection
// db.prepare('SELECT * FROM meals').run() inserting || creating a data
// db.prepare('SELECT * FROM meals').all() fetching all data || all rows
// db.prepare('SELECT * FROM meals').get() fetch single row

// npm i slugify, xss

// Sanitizing the data before saving it to the database
export async function saveMeal(meal) {
  console.warn("saveMeal(meal) on getMeals.js");
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const images = Array.isArray(meal.images) ? meal.images : [meal.images],
    imagePaths = [];

  for (const image of images) {
    const extension = image.name.split(",").pop(), // Get the file extension .jpg, .png, etc.
      filename = `${meal.slug}-${Date.now()}.${extension}`, //  Generate a unique filename
      stream = fs.createWriteStream(`public/images/${filename}`), // Create a write stream
      bufferedImage = await image.arrayBuffer(); // Convert the image to a buffer array gives us promise. This is a type array buffer

    await new Promise((resolve, reject) => {
      stream.write(Buffer.from(bufferedImage), (error) => {
        // Write the buffer to the stream. This is a type regular  buffer
        if (error) {
          reject(new Error("Saving Image failed!")); // Reject the promise if an error occurs
          console.warn(error);
        } else {
          imagePaths.push(`/images/${filename}`); // Save the image path
          stream.end(resolve); // End the stream and resolve the promise
        }
      });
    });
  }

  meal.images = imagePaths.join(","); // Save the image paths as a comma-separated string

  db.prepare(
    `INSERT INTO meals 
                (title, summary, instructions, creator, creator_email, images, slug) 
            VALUES 
                (@title, @summary, @instructions, @creator, @creator_email, @images, @slug)`,
  ).run(meal);
}
// base64 = meal.image.split(";").pop().split(",").pop(),
// bufferedImage = Buffer.from(meal.image, "base64");
