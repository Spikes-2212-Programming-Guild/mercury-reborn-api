let matches = null


async function insertSpectatorMatch(name, match) {
  return await matches.insertOne({name, match})
}

async function findSpectatorMatch(name) {
  return (await matches.findOne({name}))
}

async function deleteSpectatorMatch(name) {
  return await matches.deleteOne({name})
}

async function spectatorMatchExists(name) {
  return !!(await matches.findOne({name}))
}

async function getAllSavedMatchNames() {
  const matchesData = await matches.find({}).toArray()
  let result = matchesData.map(match => match.name)
  return result
}

function setCollection(collection) {
  matches = collection
}


export {
  setCollection,
  insertSpectatorMatch,
  findSpectatorMatch,
  deleteSpectatorMatch,
  spectatorMatchExists,
  getAllSavedMatchNames
}