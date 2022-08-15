import { atom } from "jotai";
import getUser, { Endpoints } from "@services/api";
import {
  UserActivityData,
  UserAverageTimeSessions,
  UserData,
  UserPerformanceData,
} from "@src/types/endpoints";

export const userData = atom(async () => getUser<UserData>({ userId: 12 }));

export const userActivity = atom(async () =>
  getUser<UserActivityData>({ userId: 12, endpoint: Endpoints.Activity })
);

export const userAverageSessions = atom(async () =>
  getUser<UserAverageTimeSessions>({
    userId: 12,
    endpoint: Endpoints.AverageSessions,
  })
);

export const userPerformance = atom(async () =>
  getUser<UserPerformanceData>({ userId: 12, endpoint: Endpoints.Performance })
);
