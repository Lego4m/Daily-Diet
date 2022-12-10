import { Meal } from 'src/types';

export function getDietInfos(meals: Meal[]) {
  const totalMeals = meals.length;

  const mealsInDiet = meals.reduce((acc, meal) => meal.isOnDiet ? acc + 1 : acc, 0);
  const mealsOutOfDiet = meals.reduce((acc, meal) => meal.isOnDiet ? acc : acc + 1, 0);

  const percentOfMealsInDiet = (mealsInDiet * 100 / totalMeals) || 0;

  const isOnDiet = percentOfMealsInDiet >= 60;

  const inDietSequences = getInDietSequences(meals); 

  const bestInDietSequence = inDietSequences.reduce((acc, sequence) => sequence.length > acc ? sequence.length : acc, 0);

  return {
    totalMeals,
    mealsInDiet,
    mealsOutOfDiet,
    percentOfMealsInDiet,
    isOnDiet,
    bestInDietSequence
  }
}

function getInDietSequences(meals: Meal[]) {
  const mealsByCrescentDateOrder = meals.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // old to recent.

  return mealsByCrescentDateOrder
    .reduce<number[][]>((acc, meal) => {
      if (!meal.isOnDiet) {
        acc.push([]);
        return acc;
      }

      acc[acc.length - 1].push(meal.id);

      return acc;
    }, [[]])
  .filter((array) => array.length >= 1); // remove empty arrays
}