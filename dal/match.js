import * as team from "./team"

async function saveMatch(teamNumber, match) {
  const query = {}
  query[`${match.number}`] = match
  return await team.updateTeam(teamNumber, {
    $set: query
  })
}

export {
  saveMatch
}
