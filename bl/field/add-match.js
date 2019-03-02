import {saveMatch} from "../../dal/field/match"
import {insertTeam, teamExsits} from "../../dal/field/team"

async function addMatch(teamNumber, match) {
  delete match.team
  if(! (await teamExsits(teamNumber))) {
    await insertTeam({number: teamNumber, matches: {}})
  }
  return await saveMatch(teamNumber, match)

}

export {
  addMatch
}
