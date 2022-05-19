"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveUserInfo = exports.getUserInfo = void 0;
var userData = [{
  id: "1",
  name: "Dumbo",
  avatar: "dragon",
  lastLogin: new Date("2022-05-12T14:30:00Z")
}, {
  id: "2",
  name: "Alice",
  avatar: "butterfly",
  lastLogin: new Date("2022-05-14T14:30:00Z")
}];
/**
 * Gets user info for a given user.
 * @param {*} userId 
 * @returns 
 */

var getUserInfo = function getUserInfo(userId) {
  var user = userData.find(function (user) {
    return user.id == userId;
  });
  return Promise.resolve(user);
};
/**
 * Save userInfo back to Firebase DB.
 * @param {*} userInfo 
 * @returns 
 */


exports.getUserInfo = getUserInfo;

var saveUserInfo = function saveUserInfo(userInfo) {
  if (userInfo) {
    console.log("Saving userInfo for user ".concat(userInfo.name, ", id ").concat(userInfo.id));
  } else {
    return Promise.reject(null);
  }

  return Promise.resolve(userInfo);
};

exports.saveUserInfo = saveUserInfo;