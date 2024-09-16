import ImageSlideshow from "@/components/(CSR)/ImageSlideshow/ImageSlideshow.js";
import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.dir("Rendering page.js");

  return (
    <>
      <header className={classes.header}>
        <section className={classes.slideshow}>
          <ImageSlideshow />
        </section>

        <section>
          <article className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies!</h1>
            <p>Taste & Share Food from all over the world!</p>
          </article>
          <article className={classes.cta}>
            <Link href="/community">Join the Community!</Link>
            <Link href="/meals">Explore the Meals!</Link>
          </article>
        </section>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
