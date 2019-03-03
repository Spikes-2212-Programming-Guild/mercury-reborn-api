let teams = null

async function getTeam (team_id) {
  return await teams.findOne({team_id})
}

async function insertTeam (team) {
  return await teams.insertOne(team)
}

async function updateTeam (team_id, updateQuery) {
  return await teams.updateOne({team_id}, updateQuery)
}

async function removeTeam (team_id) {
  return await teams.removeOne({team_id})
}

async function teamExsits (team_id) {
  const t = await getTeam(team_id)
  return !!t
}

async function getAll () {
  return await teams.find().toArray()
}

function setCollection (collection) {
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
