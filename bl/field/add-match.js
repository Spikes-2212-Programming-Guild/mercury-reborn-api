import {saveMatch} from "../../dal/field/match"
import {insertTeam, teamExsits} from "../../dal/field/team"

async function addMatch(team_id, match) {
  delete match.team
  if(! (await teamExsits(team_id))) {
    await insertTeam({number: team_id, matches: {}})
  }
  return await saveMatch(team_id, match)

}

export {
  addMatch
}
