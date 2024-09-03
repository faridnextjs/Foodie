import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        {/* fill means fill the available space */}
        <div className={classes.image}>
          {image ? (
            <Image src={image} alt={title} fill sizes="100vw" /> // Correct Image usage
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
