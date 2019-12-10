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
          day: Days.Tuesday,
          meal: 'Tomatsuppe',
        },
        this.generate(Days.Wednesday, 'Stegte nudler'),
        this.generate(Days.Thursday, 'Hjemmelavet burger'),
      ],
    });

    return plans.find((plan) => plan.week === week);
  }

  private generate(day: Days, meal: string): DayPlan {
    return {
      day,
      meal,
    };
  }
}

export const mealPlanService = new MealPlanService();
