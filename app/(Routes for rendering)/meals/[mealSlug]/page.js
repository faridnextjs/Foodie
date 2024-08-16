export default function MealsSlug({ params }) {
  console.log(params);
  console.log(params.slug);

  return (
    <main>
      <h1>Welcome to the Meals Slug!</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
