import { Meal } from 'src/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: {
        meal: Meal;
      };
      newMeal: undefined;
      editMeal: {
        meal: Meal;
      }
      feedback: {
        isMealOnDiet: boolean;
      }
    }
  }
}