import request from "./request.js";

export function getChannels({ token }) {
  return request("GET", "/channels", { token });
}
