let teams = null


async function getTeam(number) {
  return await teams.findOne({number}, {_id:0})
}

async function insertTeam(team) {
  return await teams.insertOne(team)
}

async function updateTeam(number, updateQuery) {
  return await teams.updateOne({number}, updateQuery)
}

async function removeTeam(number) {
  return await teams.removeOne({number})
}

async function teamExsits(number) {
  const t = await getTeam(number)
  return !!t
}

async function getAll() {
  return await teams.find().project({_id:0}).toArray
}

function setCollection(collection) {
  teams = collection
}

export {
  setCollection,
  getTeam,
  insertTeam,
  removeTeam,
  updateTeam,
  teamExsits,
  getAll
}