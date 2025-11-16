// console.log("OBJECTBALL LOADED!");
// debugger

// const gameObject = () => {
//   return {
//     home: {
//       teamName: "Brooklyn Nets",
//       colors: ["Black", "white"],
//       players: {
//         "Alan Anderson": {
//           number: 0,
//           shoe: 16,
//           points: 22,
//           rebounds: 12,
//           assists: 12,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 1,
//         },
//         "Reggie Evans": {
//           number: 30,
//           shoe: 14,
//           points: 12,
//           rebounds: 12,
//           assists: 12,
//           steals: 12,
//           blocks: 12,
//           slamDunks: 7,
//         },
//         "Brook Lopez": {
//           number: 11,
//           shoe: 17,
//           points: 17,
//           rebounds: 19,
//           assists: 10,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 15,
//         },
//         "Mason Plumlee": {
//           number: 1,
//           shoe: 19,
//           points: 26,
//           rebounds: 12,
//           assists: 6,
//           steals: 3,
//           blocks: 8,
//           slamDunks: 5,
//         },
//         "Jason Terry": {
//           number: 31,
//           shoe: 15,
//           points: 19,
//           rebounds: 2,
//           assists: 2,
//           steals: 4,
//           blocks: 11,
//           slamDunks: 1,
//         },
//       },
//     },

//     away: {
//       teamName: "Charlotte Hornets",
//       colors: ["Turquoise", "purple"],
//       players: {
//         "Jeff Adrien": {
//           number: 4,
//           shoe: 18,
//           points: 10,
//           rebounds: 1,
//           assists: 1,
//           steals: 2,
//           blocks: 7,
//           slamDunks: 2,
//         },
//         "Bismak Biyombo": {
//           number: 0,
//           shoe: 16,
//           points: 12,
//           rebounds: 4,
//           assists: 7,
//           steals: 22,
//           blocks: 15,
//           slamDunks: 10,
//         },
//         "DeSagna Diop": {
//           number: 2,
//           shoe: 14,
//           points: 24,
//           rebounds: 12,
//           assists: 12,
//           steals: 4,
//           blocks: 5,
//           slamDunks: 5,
//         },
//         "Ben Gordon": {
//           number: 8,
//           shoe: 15,
//           points: 33,
//           rebounds: 3, 
//           assists: 2,
//           steals: 1,
//           blocks: 1,
//           slamDunks: 0,
//         },
//         "Kemba Walker": {
//           number: 33,
//           shoe: 15,
//           points: 6,
//           rebounds: 12,
//           assists: 12,
//           steals: 7,
//           blocks: 5,
//           slamDunks: 12,
//         },
//       },
//     },
//   };
// };


// function numPointsScored(playerName) {
//   let game = gameObject();
// for (const awayKey in game.away.players) {
//   if (awayKey === playerName) {
//     debugger
//     return game.away.players[awayKey].points;
//   } else {
//     for (const homeKey in game.home.players) {
//       if (homeKey === playerName) {
//         return game.home.players[homeKey].points;
//       }
//     }
//   }
// }
   
  


// function shoeSize(playerName) {
//   let game = gameObject();
//   for (const team in game) {
//     let players = game[team].players;
//     debugger
//     for (const player in players) {
//       if (player === playerName) {
//         return players[player].shoe;
//     }
//   }
// }
// }



// function teamColors(teamName) {
//   let game = gameObject();

//   for (const team in game) {
//     if (game[team].teamName === teamName) {
//       return game[team].colors;
//     }

//   }
// }

// function teamNames() {
//   let game = gameObject();
//   let names = [];
//   for (const team in game) {
//     console.log(team)
//     debugger
//     names.push(game[team].teamName);
//   }
// return names
// }

// function playerNumbers(name) {
//   let game = gameObject();
//   let numbers = []
//   for (const team in game) {
//     if (game[team].teamName === name) {
//       for (const player in game[team].teamName) {
//         debugger
//         numbers.push(player.number)
//       }
//       // numbers.push(game[team].name.players)
//     }
//   }
//   return numbers;
// }



// console.log(playerNumbers("Brooklyn Nets"))
// console.log(shoeSize("Kemba Walker"))
// console.log(numPointsScored("Kemba Walker"))
// console.log(teamColors("Charlotte Hornets"))
// console.log(teamNames())


console.log("OBJECTBALL LOADED!");
debugger;

const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "white"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 22, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Kemba Walker": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 7, blocks: 5, slamDunks: 12 },
      },
    },
  };
};


function numPointsScored(playerName) {
  const game = gameObject();

  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (player === playerName) {
        debugger;
        return players[player].points;
      }
    }
  }
}   


function shoeSize(playerName) {
  const game = gameObject();

  for (const team in game) {
    const players = game[team].players;
    debugger;

    for (const player in players) {
      if (player === playerName) {
        return players[player].shoe;
      }
    }
  }
}   

function teamColors(teamName) {
  const game = gameObject();

  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}


function teamNames() {
  const game = gameObject();
  const names = [];

  for (const team in game) {
    debugger;
    names.push(game[team].teamName);
  }

  return names;
}


function playerNumbers(teamName) {
  const game = gameObject();
  const numbers = [];

  for (const team in game) {
    if (game[team].teamName === teamName) {
      const players = game[team].players;

      for (const player in players) {
        debugger;
        numbers.push(players[player].number);
      }
    }
  }

  return numbers;
}


function playerStats(playerName) {
  const game = gameObject();

  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (player === playerName) {
        return players[player];   
      }
    }
  }
}


function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;
  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      
       if (players[player].shoe > biggestShoe) {
        biggestShoe = players[player].shoe; 
        rebounds = players[player].rebounds; 
       }
    }
  } 
  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let mostScored = 0;
  let topScorer = "";

  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (players[player]["points"] > mostScored) {
        mostScored = players[player]["points"];
        topScorer = player  
      }
    }
  }
  return topScorer;

}

function winningTeam() {
  let points = 0;
  let winningTeam = "";
  const game = gameObject();
  for (const team in game) {
    let teamPoints = 0;
    let players = game[team].players;
    for (const player in players) {
      teamPoints += players[player].points;
    }
      if (teamPoints > points){
        points = teamPoints;
        winningTeam = game[team].teamName;
      }
    }
    
  
return winningTeam;
}

function playerWithLongestName() {
 let longestName = "";
  const game = gameObject();

  for (const team in game) {
    const players = game[team].players;

    for (const player in players) {
      if (player.length > longestName.length) {
        longestName = player
           
      }
    }
  }
  return longestName;

}

function doesLongNameStealATon() {
  const game = gameObject();
  let mostSteals = 0;
  let topStealer = "";
  for (const team in game) {
    const players = game[team].players;
    for (const player in players) {
      if (players[player]["steals"] > mostSteals) {
        mostSteals = players[player]["steals"];
        topStealer = player;
      }
     }
  }
  if (playerWithLongestName() === topStealer) {
    return true;
  } else {
    return false;
  }


}

console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
console.log((mostPointsScored()));
console.log(bigShoeRebounds());
console.log(playerStats("Ben Gordon"));
console.log(playerNumbers("Brooklyn Nets"));
console.log(shoeSize("Kemba Walker"));
console.log(numPointsScored("Kemba Walker"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamNames());