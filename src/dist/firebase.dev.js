"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserFromId = getUserFromId;
exports.getRoundsForUser = getRoundsForUser;
exports.startNewGame = startNewGame;
exports["default"] = exports.db = void 0;

var _util = require("@firebase/util");

var _app = require("firebase/app");

var _lite = require("firebase/firestore/lite");

// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCqhYYEw7VG5s1mnwvwzQpNX94KC4GJQ0",
  authDomain: "save-oom.firebaseapp.com",
  projectId: "save-oom",
  storageBucket: "save-oom.appspot.com",
  messagingSenderId: "874113879773",
  appId: "1:874113879773:web:863830a75d85fe5b2ed534"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig); // Reference the firestore DB

var db = (0, _lite.getFirestore)(app);
exports.db = db;

function getUsers(db) {
  var usersCol, usersSnapshot, userList;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          usersCol = (0, _lite.collection)(db, 'users');
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _lite.getDocs)(usersCol));

        case 3:
          usersSnapshot = _context.sent;
          userList = usersSnapshot.docs.map(function (doc) {
            return doc.data();
          });
          return _context.abrupt("return", userList);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

; // gets a User document given a userId.

/**
 * 
 * @param {*} userId 
 * @returns a docSnap (document snapshow), to access use docSnap.data(), returns a Promise.
 */

function getUserFromId(userId) {
  var docRef, docSnap;
  return regeneratorRuntime.async(function getUserFromId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          docRef = (0, _lite.doc)(db, "users", userId);
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _lite.getDoc)(docRef));

        case 3:
          docSnap = _context2.sent;
          return _context2.abrupt("return", docSnap);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getRoundsForUser(userId) {
  var docRef, roundsRef, docSnap;
  return regeneratorRuntime.async(function getRoundsForUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          docRef = (0, _lite.doc)(db, "users", userId);
          roundsRef = (0, _lite.collection)(docRef, 'rounds_played');
          _context3.next = 4;
          return regeneratorRuntime.awrap((0, _lite.getDocs)(roundsRef));

        case 4:
          docSnap = _context3.sent;
          docSnap.forEach(function (doc) {
            console.log(doc.id + " ==> " + doc.data);
          });
          return _context3.abrupt("return", docSnap);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function startNewGame(userId, gameId, level) {
  return regeneratorRuntime.async(function startNewGame$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  });
}

var _default = getUsers;
exports["default"] = _default;