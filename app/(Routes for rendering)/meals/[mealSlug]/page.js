import classes from "./page.module.css";
import Image from "next/image";
import { getMealBySlug } from "@/lib/getMeals.js";
import SanitizedHtml from "@/components/(CSR)/DOMPurify/getMealDetailsHtml";
import { notFound } from "next/navigation"; // Import the client-side component for sanitizing HTML

export default function MealDetailsPage({ params }) {
  // params contains the dynamic route parameters and their values and is passed to the page component as a prop and contain objects itself like {params: {mealSlug: "meal-slug"}}
  // {params: {key: "value"}} === {params: {mealSlug: "juicy-cheese-burger"}}
  // Get the meal data based on the 'slug' parameter
  // 'slug' is simply that part that's encoded in the URL  page.com/meals/mealSlug
  const getAMeal = getMealBySlug(params.mealSlug);
  // Fall back to the 404 page if the meal data is not found
  !getAMeal && notFound();

  // Destructure the meal object to get necessary properties
  const { images, instructions, creator_email, summary, creator, title } =
      getAMeal,
    email = "mailto:" + creator_email,
    rawHTML = instructions || "No description available",
    image = images && images.length > 0 ? images[0] : null;

  return (
    <>
      <header className={classes.header}>
        <section className={classes.image}>
          {image ? (
            <Image src={image} alt={title} fill />
          ) : (
            <p>Image not available</p>
          )}
        </section>
        <article className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={email}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </article>
      </header>
      <main>
        {/* Use the SanitizedHtml component to safely render the raw HTML */}
        <SanitizedHtml rawHTML={rawHTML} />
      </main>
    </>
  );
}

// dangerouslySetInnerHTML open the file up to cross-site scripting attack when outputting the content
