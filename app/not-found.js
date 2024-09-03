export default function NotFound() {
  return (
    <main className="error">
      <h1>Meal not found</h1>
      <p>
        Unfortunately, we could not find the requested{" "}
        <strong style={{ color: "tomato" }}>meal</strong> or the{" "}
        <strong style={{ color: "rebeccapurple" }}>page</strong>.
      </p>
    </main>
  );
}
