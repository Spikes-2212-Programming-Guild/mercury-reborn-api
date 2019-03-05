import * as team from "./team"

async function saveMatch (team_id, match) {
  const query = {}
  query[`matches.${match.name}`] = match
  return await team.updateTeam(team_id, {$set: query})
}

async function getMatch (team_id, matchName) {
  let matches = await getMatchesForTeam(team_id)
  return matches[matchName]
}

async function removeMatch (team_id, matchName) {
  const query = {}
  query[`matches.${matchName}`] = ""
  return await team.updateTeam(team_id, {$unset: query})
}

async function matchExists (team_id, matchName) {
  return !!(await getMatch(team_id, matchName))
}

async function getMatchesForTeam (team_id) {
  let teamData = await team.getTeam(team_id)
  return teamData.matches
}

export {
  saveMatch,
  getMatch,
  removeMatch,
  matchExists,
  getMatchesForTeam
}
