import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/(SSR Default)/meals/meals-grid";
import { getMeals } from "@/lib/getMeals";

const Meals = async () => <MealsGrid meals={await getMeals()} />;
// Server component functions can be converted to async function
export default function MealsPage() {
  console.dir("Rendering Meals");

  // we are getting data without useEffect, without any unnecessary fetch request
  // it's special for server components in Next.js

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your recipe and cook it yourself.It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        {/* <MealsGrid meals={[]} /> */}
        {/* <MealsGrid meals={meals} /> */}
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
