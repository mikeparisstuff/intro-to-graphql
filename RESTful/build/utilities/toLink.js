"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLink = toLink;
function toLink(req, type, id) {
  return "http://" + req.headers.host + "/" + type + "/" + id;
}