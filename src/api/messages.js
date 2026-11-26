import request from "./request.js";

export function getMessages({ token }) {
  return request("GET", "/messages", { token });
}
