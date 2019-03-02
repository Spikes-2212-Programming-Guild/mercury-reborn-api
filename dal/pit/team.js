let teams = null


async function addPitScouting(team, form) {
  return await teams.insertOne({team, form})
}

async function pitScoutingExists(team) {
  return !!(await teams.findOne({team}))
}

async function dropPitScouting(team) {
  return await teams.dropOne({team})
}

async function getPitScouting(team) {
  return (await teams.findOne({team}).project({id:0, team:0})).form
}


function setCollection(collection) {
  teams = collection
}

export {
  addPitScouting,
  getPitScouting,
  setCollection,
  dropPitScouting,
  pitScoutingExists
}