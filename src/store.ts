import { atom } from "jotai";
import getUser, { Endpoints } from "@services/api";
import {
  UserActivityData,
  UserAverageTimeSessions,
  UserData,
  UserPerformanceData,
} from "@src/types/endpoints";
import { loadable } from "jotai/utils";

const userId = import.meta.env.VITE_LOGGED_USER;

export const userData = atom(async () => getUser<UserData>({ userId }));
export const loadableUserData = loadable(userData);

export const userActivity = atom(async () =>
  getUser<UserActivityData>({ userId, endpoint: Endpoints.Activity })
);

export const userAverageSessions = atom(async () =>
  getUser<UserAverageTimeSessions>({
    userId,
    endpoint: Endpoints.AverageSessions,
  })
);

export const userPerformance = atom(async () =>
  getUser<UserPerformanceData>({ userId, endpoint: Endpoints.Performance })
);
