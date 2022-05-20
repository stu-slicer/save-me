
const ALICE_ID = "2";
const BOB_ID = "3";
const CAROL_ID = "4";
const DUMBO_ID = "1";

const ALICE = "Alice";
const BOB = "Bob";
const CAROL = "Carol";
const DUMBO = "Dumbo";

const GAME_SWING = "swing";
const GAME_DRINKING = "drinking";


const userData = [
    {
        id: DUMBO_ID,
        name: DUMBO,
        avatar: "dragon",
        lastLogin: new Date("2022-05-14T14:00:00Z"),
    },
    {
        id: ALICE_ID,
        name: ALICE,
        avatar: "cat",
        lastLogin: new Date("2022-05-14T14:30:00Z"),
    },
    {
        id: BOB_ID,
        name: BOB,
        avatar: "dog",
        lastLogin: new Date("2022-05-15T14:30:00Z"),
    },
    {
        id: CAROL_ID,
        name: CAROL,
        avatar: "rocket",
        lastLogin: new Date("2022-05-16T11:30:00Z"),
    }
];

const gameRoundData = [
    {
        id: "10000000",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-12T14:32:00Z"),
        score: 1,
        phonic: "s",
        correct: true,
    },
    {
        id: "10000001",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-12T14:34:00Z"),
        score: 2,
        phonic: "b",
        correct: true,
    },
    {
        id: "10000002",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-12T14:36:00Z"),
        score: 2,
        phonic: "c",
        correct: false,
    },
    {
        id: "10000003",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-12T14:40:00Z"),
        score: 2,
        phonic: "f",
        correct: false,
    },
    {
        id: "10000004",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-12T14:42:00Z"),
        score: 3,
        phonic: "e",
        correct: true,
    },
    {
        id: "10000005",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-14T14:36:00Z"),
        score: 1,
        phonic: "c",
        correct: true,
    },
    {
        id: "10000006",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-14T14:40:00Z"),
        score: 2,
        phonic: "f",
        correct: true,
    },
    {
        id: "10000007",
        userId: ALICE_ID,
        gameId: GAME_SWING,
        level: 1,
        roundDate: new Date("2022-05-14T14:44:00Z"),
        score: 3,
        phonic: "h",
        correct: true,
    }
]

/**
 * Gets user info for a given user.
 * @param {*} userId 
 * @returns userInfo as a Promise.
 */
export const getUserInfo = (userId) => {
    const user = userData.find( user => user.id == userId );
    return Promise.resolve( user );
}

/**
 * Save userInfo back to Firebase DB.
 * @param {*} userInfo 
 * @returns saved userInfo as a Promise.
 */
export const saveUserInfo = (userInfo) => {
    if( userInfo ) {
        console.log( `Saving userInfo for user ${userInfo.name}, id ${userInfo.id}` );
    } else {
        return Promise.reject( null );
    }

    return Promise.resolve( userInfo );
}

/**
 * Get all the game round data for the given user, game and level.
 * Game round data returned in a array.
 * Default is to order them by round date.
 * @param {*} userId 
 * @param {*} gameId 
 * @param {*} level 
 * @param {*} latestFirst 
 * @returns an array of game round data as a Promise.
 */
export const getGameRounds = (userId, gameId, level, latestFirst = false) => {
    const rounds = gameRoundData.filter( (round) => {
        // console.log( round );
        const filtered = round.userId == userId &&
                round.gameId == gameId &&
                round.level == level;
        return filtered;

    } );
    if( latestFirst ) {
        rounds.sort( (a,b) => b.roundDate - a.roundDate );
    } else {
        rounds.sort( (a,b) => a.roundDate - b.roundDate );
    }
    return Promise.resolve( rounds );
}

/**
 * Get the phonics for the given user for the Swing game.
 * Phonics are the codes only, sorted as they should be used.
 * @param {*} userId 
 * @param {*} level 
 * @returns an array of phonic sound codes as a Promise.
 */
export const getSwingPhonics = (userId, level) => {
    const promise = getGameRounds( userId, GAME_SWING, level)
        .then( rounds => {
            const sounds = [];
            rounds.forEach( round => {
                if( sounds.indexOf( round.phonic) < 0 ) {
                    sounds.push( round.phonic );
                }
            });

            // CLEVER SORTING/ORDERING AND ALL THAT GOES HERE ...!

            return Promise.resolve( sounds );        
        });
    return promise;
}

