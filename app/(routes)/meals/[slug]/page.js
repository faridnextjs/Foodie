export default function MealsComunity({ params }) {
  console.log(params);
  console.log(params.slug);

  return (
    <main>
      <h1>Welcome to the Meals Community!</h1>
      <p>{params.slug}</p>
    </main>
  );
}
