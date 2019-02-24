import * as team from "./team"

async function saveMatch(teamNumber, match) {
  const query = {}
  console.log(match)
  query[`matches.${match.matchName}`] = match
  return await team.updateTeam(teamNumber, {$set: query})
}

async function getMatch(teamNumber, matchName) {
  return await team.getTeam(teamNumber).matches.find(match => match.number = matchName)
}

async function removeMatch(teamNumber, matchName) {
  const query = {}
  query[`matches.${matchName}`] = ""
  return await team.updateTeam(teamNumber, {$unset: query})
}

async function matchExists(teamNumber, matchName) {
  const m = team.getTeam(teamNumber).matches.find(match => match.number === matchName)
  return !!m
}

async function getAllFromTeam(teamNumber) {
  return await team.getTeam(teamNumber).matches
}

export {
  saveMatch,
  getMatch,
  removeMatch,
  matchExists,
  getAllFromTeam
}
