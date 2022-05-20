import React from 'react'
import lyrics from '../../data/save-me.js';
import LyricLine from '../LyricLine/LyricLine.jsx';
import getUsers, {app, db, getUserFromId, getRoundsForUser} from '../../firebase';
import {getUserInfo, saveUserInfo, getGameRounds, getSwingPhonics} from '../../save-oom-funcs';


const LyricList = () => {

//   getUsers(db).then( user => console.log(user) );
// getUserFromId("dumbo").then( user => console.log( user.data()) );
// getRoundsForUser("dumbo");

  const processAndSaveUser = (userData) => {
    console.log("Processing " + userData.id );
    console.log(userData );
    saveUserInfo( userData );
  }

  getUserInfo("1").then( user => console.log(user) );
  getUserInfo("2").then( user => processAndSaveUser(user) );

  getGameRounds("2", "swing", 1, true).then( round => console.log( round ));
  getSwingPhonics("2", 1, true).then( sound => console.log( sound ));

  return (
    <div className='lyrics'>
        {lyrics.map( (line, i) => {
            return <LyricLine key={"line-" + i} line={line} ></LyricLine>
        })}
    </div>
  )
}

export default LyricList