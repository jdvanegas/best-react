import { ENDPOINT } from "../helpers/constants";
import { addLoading, removeLoading } from "../helpers/functions";

export const get = async (url: string): Promise<any> => {
  addLoading();
  const token = localStorage.getItem("token");

  return fetch(`${ENDPOINT}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  })
    .then((res) => {
      removeLoading();
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      removeLoading();
      return { data: null, status: false };
    });
};

export const post = async (url: string, data: any): Promise<any> => {
  addLoading();
  const token = localStorage.getItem("token");

  return fetch(`${ENDPOINT}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      removeLoading();
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      removeLoading();
      return { data: null, status: false };
    });
};
