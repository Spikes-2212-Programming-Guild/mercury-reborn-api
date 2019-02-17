import * as team from "./team"

async function saveMatch(teamNumber, match) {
  const query = {}
  query[`${match.number}`] = match
  return await team.updateTeam(teamNumber, {
    $set: query
  })
}

async function getMatch(teamNumber, matchNumber) {
  return await team.getTeam(teamNumber).findOne({number: matchNumber})
}

export {
  saveMatch,
  getMatch
}
