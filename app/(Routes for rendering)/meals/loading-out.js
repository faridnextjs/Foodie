import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching Meals...</p>;
}

// loading.js, error.js, not-found.js are fallback components, and they are used in Suspense, and they apply to all siblings && nested pages && layouts
// it applies to all siblings && nested pages && layouts
// I changed it loading-out.js make it not to work
// loading.js works same like <Suspense fallback={<Message/>}><Component/></Suspense>
