import {saveMatch} from "../dal/match"
import {insertTeam, teamExsits} from "../dal/team"

async function addMatch(teamNumber, match) {
  if(!teamExsits(teamNumber))
    await insertTeam({number: teamNumber})
  return await saveMatch(teamNumber, match)

}

export {
  addMatch
}

//TODO add a function that is responsible for adding a match to the database.
//TODO in case the team doesn't exist create an empty one in the database

//TODO add a match.js route that calls the function on the path /match/submit