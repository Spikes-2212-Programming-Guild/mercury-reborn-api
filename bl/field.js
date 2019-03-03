import { saveMatch, getMatchesForTeam, matchExists, getMatch as getMatchFromDB} from "../dal/field/match"
import { insertTeam, teamExsits, getAll } from "../dal/field/team"
import * as _ from "lodash"

async function addMatch (team_id, match) {
  delete match.team
  if (!(await teamExsits(team_id))) {
    await insertTeam({team_id, matches: {}})
  }
  return await saveMatch(team_id, match)

}

async function getAllSavedMatchNames () {
  const team_ids = (await getAll()).map(team => team.team_id)
  const savedMatches = []
  console.log(team_ids)
  for (let i = 0; i < team_ids.length; i++) {
    let team_id = team_ids[i]
    let matches = await getMatchesForTeam(team_id)

    _.map(matches, match => savedMatches.push(match.name))
  }

  return _.uniqWith(savedMatches, _.isEqual)
}

async function getMatch(team_id, match_name) {
  if (! await matchExists(team_id, match_name)) {
    throw Error(`Match ${match_name} was not found for team ${team_id}`)
  }

  return await getMatchFromDB(team_id, match_name)
}

export {
  addMatch,
  getAllSavedMatchNames,
  getMatch
}
