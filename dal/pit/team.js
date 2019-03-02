let teams = null


async function addPitScouting(team, form) {
  return teams.insert({team, form})
}

async function getPitScouting(team) {
  return (await teams.find({team})).form
}


function setCollection(collection) {
  teams = collection
}

export {
  addPitScouting,
  getPitScouting,
  setCollection
}