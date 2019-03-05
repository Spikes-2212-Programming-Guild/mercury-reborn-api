import * as dal from "../dal/spectator/match"
import { spectatorMatchExists } from "../dal/spectator/match"

export async function saveSpectatorMatch (match) {
  const name = match.match
  delete match.match
  if (!await dal.spectatorMatchExists(name)) {
    await dal.insertSpectatorMatch(name, match)
  }
  await dal.deleteSpectatorMatch(name)
  return await dal.insertSpectatorMatch(name, match)
}

export async function getAllSavedMatchNames() {
  return await dal.getAllSavedMatchNames()
}

export async function getMatch(match_name) {
  if (! await spectatorMatchExists(match_name)) {
    throw Error(  `could not find a match for name ${match_name}`)
  }
  return (await dal.findSpectatorMatch(match_name)).match
}