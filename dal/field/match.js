import * as team from "./team"

async function saveMatch (team_id, match) {
  const query = {}
  console.log(match)
  query[`matches.${match.name}`] = match
  return await team.updateTeam(team_id, {$set: query})
}

async function getMatch (team_id, matchName) {
  return await team.getTeam(team_id).matches.find(match => match.number = matchName)
}

async function removeMatch (team_id, matchName) {
  const query = {}
  query[`matches.${matchName}`] = ""
  return await team.updateTeam(team_id, {$unset: query})
}

async function matchExists (team_id, matchName) {
  const m = team.getTeam(team_id).matches.find(match => match.name === matchName)
  return !!m
}

async function getMatchesForTeam (team_id) {
  return (await team.getTeam(team_id)).matches
}

export {
  saveMatch,
  getMatch,
  removeMatch,
  matchExists,
  getMatchesForTeam
}
