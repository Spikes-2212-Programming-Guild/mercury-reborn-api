let matches = null


async function insertSpectatorMatch(name, match) {
  return await matches.insertOne({name, match})
}

async function findSpectatorMatch(name) {
  return (await matches.findOne({name}.project({name:0, _id:0}))).match
}

async function deleteSpectatorMatch(name) {
  return await matches.deleteOne({name})
}

async function spectatorMatchExists(name) {
  return !!(await findSpectatorMatch(name))
}

function setCollection(collection) {
  matches = collection
}

export {
  setCollection,
  insertSpectatorMatch,
  findSpectatorMatch,
  deleteSpectatorMatch,
  spectatorMatchExists
}