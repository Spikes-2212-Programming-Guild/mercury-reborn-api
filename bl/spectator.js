import * as dal from "../dal/spectator/match"

export async function saveSpectatorMatch (match) {
  const {name} = match
  delete match.name
  if ( await dal.spectatorMatchExists(name)) {
    await dal.deleteSpectatorMatch(name)
  }
  return await dal.insertSpectatorMatch(name, match)
}

export async function getAllSavedMatchNames() {
  return await dal.getAllSavedMatchNames()
}