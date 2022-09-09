import axios from "axios";

export enum Endpoints {
  User = "",
  Activity = "activity",
  AverageSessions = "average-sessions",
  Performance = "performance",
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}/user`,
});

export interface getUserParams {
  userId: number | string;
  endpoint?: Endpoints;
}

/**
 * returns a promise containing data from the sportsee backend servers
 * @constructor
 * @param {Object} params - the params used to create the query
 * @param {number} params.userId - ID of the user.
 * @param {endpoints} params.endpoint - Specific endpoint you want to get the data from.
 */
export default async function getUser<T>({
  userId,
  endpoint = Endpoints.User,
}: getUserParams) {
  try {
    const response = await api.get<T>(`/${userId}/${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}