import * as team from "./team"

async function saveMatch(teamNumber, match) {
  const query = {}
  query[`matches.${match.number}`] = match
  return await team.updateTeam(teamNumber, {$set: query})
}

async function getMatch(teamNumber, matchNumber) {
  return await team.getTeam(teamNumber).matches.find(match => match.number = matchNumber)
}

async function removeMatch(teamNumber, matchNumber) {
  const query = {}
  query[`matches.${matchNumber}`] = ""
  return await team.updateTeam(teamNumber, {$unset: query})
}

async function matchExists(teamNumber, matchNumber) {
  const m = team.getTeam(teamNumber).matches.find(match => match.number === matchNumber)
  return !!m
}

export {
  saveMatch,
  getMatch,
  removeMatch,
  matchExists
}
