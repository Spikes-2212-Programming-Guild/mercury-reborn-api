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

//TODO add a match.js route that calls the function on the path /match/submit