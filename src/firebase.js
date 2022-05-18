// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqhYYEw7VG5s1mnwvwzQpNX94KC4GJQ0",
  authDomain: "save-oom.firebaseapp.com",
  projectId: "save-oom",
  storageBucket: "save-oom.appspot.com",
  messagingSenderId: "874113879773",
  appId: "1:874113879773:web:863830a75d85fe5b2ed534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference the firestore DB
export const db = getFirestore(app);

async function getUsers(db) {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const userList = usersSnapshot.docs.map(doc => doc.data());
    return userList;
  };

// gets a User document given a userId.
/**
 * 
 * @param {*} userId 
 * @returns a docSnap (document snapshow), to access use docSnap.data(), returns a Promise.
 */
export async function getUserFromId(userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc( docRef );
    return docSnap;

}

export async function getRoundsForUser(userId) {
  const docRef = doc(db, "users", userId);
  const roundsRef = collection( docRef, 'rounds_played');
  const docSnap = await getDocs( roundsRef );
  docSnap.forEach( doc => {
    console.log( doc.id + " ==> " + doc.data);
  })
  return docSnap;
}

export async function startNewGame(userId, gameId, level) {
  // get the user for the userId

  // create a new game entry

  // add start date, game id, level and so on

  // save as new record.
}

export default getUsers;