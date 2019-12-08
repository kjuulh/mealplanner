export enum Days {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

export type DayPlan = {
  day: Days;
  meal: string;
};

export type WeekPlan = {
  week: number;
  plans: DayPlan[];
};

export class MealPlanService {
  public mealPlan(week: number) {
    const plans: WeekPlan[] = [];

    plans.push({
      week: 50,
      plans: [
        {
          day: Days.Monday,
          meal: 'Frikadeller',
        },
        {
          day: Days.Wednesday,
          meal: 'Tomatsuppe',
        },
      ],
    });

    return plans.find((plan) => plan.week === week);
  }
}

export const mealPlanService = new MealPlanService();
