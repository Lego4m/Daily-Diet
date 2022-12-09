import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { Meal } from 'src/types';

export async function mealEdit(meal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const editedMeals = storedMeals.map((storedMeal) => 
      storedMeal.id === meal.id ? meal : storedMeal
    );

    await AsyncStorage.setItem(
      MEAL_COLLECTION, 
      JSON.stringify(editedMeals)
    );
  } catch (error) {
    throw error;
  }
}