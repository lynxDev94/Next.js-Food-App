import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";



export const metadata = {
  title: "All meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function MealsLoader() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!{" "}
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <MealsLoader />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
