import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => {
    console.dir("Fetching all meals data on getMeals.js");

    // this will be caught by the error boundary
    // throw new Error("Failed to fetch meals data");
    setTimeout(resolve, 1000);
  });

  return db.prepare("SELECT * FROM meals").all();
}

// ? is a placeholder for the value of the slug , and it will be replaced by the value of the slug, and it will protect the query from SQL injection
export function getMealBySlug(slug) {
  console.dir("Fetching the meal data on getMeals.js by slug");
  // await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  // .get(slug) will return a single row of data that matches the slug and will replace the ? with the value of the slug
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

//  return db.prepare("SELECT * FROM meals WHERE slug = " + slug).get(slug); it is insecure ,and it is vulnerable to SQL injection
// db.prepare('SELECT * FROM meals').run() inserting || creating a data
// db.prepare('SELECT * FROM meals').all() fetching all data || all rows
// db.prepare('SELECT * FROM meals').get() fetch single row
