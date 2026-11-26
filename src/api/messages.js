import request from "./request.js";

export function getMessages({ token }) {
  return request("GET", "/messages", { token });
}

export function postMessage({ token, body, channelId, username }) {
  return request("POST", "/messages", {
    token,
    body: { body, channelId, username },
  });
}
