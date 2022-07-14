import axios from "axios";
import { useEffect, useState } from "react";

export type endpoints = "" | "activity" | "average-sessions" | "performance";

export interface getUserParams {
  userId: number;
  endpoint?: endpoints;
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}/user`,
});

/**
 * returns a promise containing data from the sportsee backend servers
 * @constructor
 * @param {Object} params
 * @param {number} params.userId - ID of the user.
 * @param {endpoints} params.endpoint - Specific endpoint you want to get the data from.
 */
export const getUser = async ({ userId, endpoint = "" }: getUserParams) => {
  try {
    const response = await api.get(`/${userId}/${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

/**
 * A react hook using the getUser function,
 * returns the data of a specific user from the sportsee backend servers,
 * or an error message in case it was not possible to get the data
 * @constructor
 * @param {Object} params
 * @param {number} params.userId - ID of the user.
 * @param {endpoints} params.endpoint - Specific endpoint you want to get the data from.
 */
export const useGetUser = ({ userId, endpoint = "" }: getUserParams) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    getUser({ userId: userId, endpoint: endpoint })
      .then((res) => {
        if (res) setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (data) {
    return data.data;
  } else {
    console.error("Couldn't get data from the backend servers");
    return {};
  }
};
