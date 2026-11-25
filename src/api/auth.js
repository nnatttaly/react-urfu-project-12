import request from "./request.js";

export function login({ username, password }) {
  return request("POST", "/login", {
    body: { username, password },
  });
}
