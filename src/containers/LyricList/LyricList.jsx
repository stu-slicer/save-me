import React from 'react'
import lyrics from '../../data/save-me.js';
import LyricLine from '../LyricLine/LyricLine.jsx';
import getUsers, {app, db, getUserFromId, getRoundsForUser} from '../../firebase';

const LyricList = () => {

//   getUsers(db).then( user => console.log(user) );
// getUserFromId("dumbo").then( user => console.log( user.data()) );
getRoundsForUser("dumbo");

  return (
    <div className='lyrics'>
        {lyrics.map( (line, i) => {
            return <LyricLine key={"line-" + i} line={line} ></LyricLine>
        })}
    </div>
  )
}

export default LyricList