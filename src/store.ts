import { atom } from "jotai";
import getUser, { Endpoints } from "@services/api";
import { UserData } from "@src/types/endpoints";
import { loadable } from "jotai/utils";

const userId = import.meta.env.VITE_LOGGED_USER;

export const userData = atom(async () => getUser<UserData>({ userId }));
export const loadableUserData = loadable(userData);

export enum QueryKeys {
  UserData = "user-data",
  Activity = "user-daily",
  AverageSessions = "user-average",
  Performance = "user-performance",
}
