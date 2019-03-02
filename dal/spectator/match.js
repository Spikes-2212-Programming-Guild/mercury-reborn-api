let matches = null


async function addSpecatorMatch(name, match) {
  return await matches.insertOne({name, match})
}

async function getSpectatorMatch(name) {
  return (await matches.findOne({name}.project({name:0, _id:0}))).match
}

function setCollection(collection) {
  matches = collection
}

export {
  setCollection
}