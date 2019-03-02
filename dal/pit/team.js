let teams = null


async function addPitScouting(team, form) {
  return teams.insert({team, form})
}

async function getPitScouting(team) {
  return (await teams.find({team}).project({id:0, team:0})).form
}


function setCollection(collection) {
  teams = collection
}

export {
  addPitScouting,
  getPitScouting,
  setCollection
}