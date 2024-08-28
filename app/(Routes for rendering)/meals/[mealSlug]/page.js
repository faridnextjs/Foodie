import classes from "./page.module.css";
import Image from "next/image";
import { getMealBySlug } from "@/lib/getMeals";
import SanitizedHtml from "@/components/(CSR)/DOMPurify/getMealDetailsHtml"; // Import the client-side component for sanitizing HTML

export default function MealDetailsPage({ params }) {
  // params contains the dynamic route parameters and their values and is passed to the page component as a prop and contain objects itself like {params: {mealSlug: "meal-slug"}}
  // {params: {key: "value"}} === {params: {mealSlug: "juicy-cheese-burger"}}
  console.dir("This is {params}");
  console.dir(params);

  // Get the meal data based on the 'slug' parameter
  // 'slug' is simply that part that's encoded in the URL  page.com/meals/mealSlug
  const getAMeal = getMealBySlug(params.mealSlug),
    image = getAMeal.image,
    description = getAMeal.instructions,
    email = "mailto:" + getAMeal.creator_email,
    summary = getAMeal.summary,
    creator = getAMeal.creator,
    title = getAMeal.title,
    rawHTML = description || "No description available";

  console.dir(" This is {params.mealSlug}");
  console.dir(params.mealSlug);
  console.dir("This is getAMeal constant");
  console.dir(getAMeal);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{getAMeal.title}</h1>
          <p className={classes.creator}>
            by <a href={email}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        {/* Use the SanitizedHtml component to safely render the raw HTML */}
        <SanitizedHtml rawHTML={rawHTML} />
      </main>
    </>
  );
}

// dangerouslySetInnerHTML open the file up to cross-site scripting attack when outputting the content
