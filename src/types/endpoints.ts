export interface UserData {
  data: {
    userId: number;
    keyData: {
      calorieCount: number;
      carbohydrateCount: number;
      lipidCount: number;
      proteinCount: number;
    };
    userInfos: {
      age: number;
      firstName: string;
      lastName: string;
    };
    todayScore?: number;
    score?: number;
  };
}

export type userPerformance = { value: number; kind: number };
export type userPerformanceKinds = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
export interface UserPerformanceData {
  data: {
    userId: number;
    kind: userPerformanceKinds;
    data: userPerformance[];
  };
}

export type userActivitySession = {
  day: string;
  kilogram: number;
  calories: number;
};

export interface UserActivityData {
  data: {
    userId: number;
    sessions: userActivitySession[];
  };
}

export type userAverageTimeSession = { day: number; sessionLength: number };
export interface UserAverageTimeSessions {
  data: {
    userId: number;
    sessions: userAverageTimeSession[];
  };
}
