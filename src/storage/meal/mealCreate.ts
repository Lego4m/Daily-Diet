import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { Meal } from 'src/types';

export async function mealCreate(meal: Omit<Meal, 'id'>) {
  try {
    const storedMeals = await mealsGetAll();

    const newMeal = {
      id: (storedMeals[storedMeals.length - 1]?.id ?? -1) + 1,
      ...meal,
    }

    await AsyncStorage.setItem(
      MEAL_COLLECTION, 
      JSON.stringify([...storedMeals, newMeal])
    );
  } catch (error) {
    throw error;
  }
}