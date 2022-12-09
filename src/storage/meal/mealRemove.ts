import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from './mealsGetAll';

import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealRemove(mealId: number) {
  try {
    const storedMeals = await mealsGetAll();

    const filtered = storedMeals.filter((meal) => meal.id !== mealId)

    await AsyncStorage.setItem(
      MEAL_COLLECTION, 
      JSON.stringify(filtered)
    );
  } catch (error) {
    throw error;
  }
}