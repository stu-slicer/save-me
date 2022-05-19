
const userData = [
    {
        id: "1",
        name: "Dumbo",
        avatar: "dragon",
        lastLogin: new Date("2022-05-12T14:30:00Z"),
    },
    {
        id: "2",
        name: "Alice",
        avatar: "butterfly",
        lastLogin: new Date("2022-05-14T14:30:00Z"),
    }
];

/**
 * Gets user info for a given user.
 * @param {*} userId 
 * @returns 
 */
export const getUserInfo = (userId) => {
    const user = userData.find( user => user.id == userId );
    return Promise.resolve( user );
}

/**
 * Save userInfo back to Firebase DB.
 * @param {*} userInfo 
 * @returns 
 */
export const saveUserInfo = (userInfo) => {
    if( userInfo ) {
        console.log( `Saving userInfo for user ${userInfo.name}, id ${userInfo.id}` );
    } else {
        return Promise.reject( null );
    }

    return Promise.resolve( userInfo );
}

