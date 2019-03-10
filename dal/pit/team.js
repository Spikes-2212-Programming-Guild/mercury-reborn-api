let teams = null


async function insertPitScouting(team, form) {
  return await teams.insertOne({team, form})
}

async function pitScoutingExists(team) {
  return !!(await teams.findOne({team}))
}

async function deletePitScouting(team) {
  return await teams.deleteOne({team})
}

async function findPitScouting(team) {
  return (await teams.findOne({team})).form
}

async function getAllSavedTeamIds() {
  const allTeams = await teams.find().toArray()
  return allTeams.map(team => team.team)
}


function setCollection(collection) {
  teams = collection
}

export {
  insertPitScouting,
  findPitScouting,
  setCollection,
  deletePitScouting,
  pitScoutingExists,
  getAllSavedTeamIds
}
