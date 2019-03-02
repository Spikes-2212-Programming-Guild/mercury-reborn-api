import { deleteSpectatorMatch, insertSpectatorMatch, spectatorMatchExists } from "../dal/spectator/match"

export async function saveSpectatorMatch (match) {
  const {name} = match
  delete match.name
  if ( await spectatorMatchExists(name)) {
    await deleteSpectatorMatch(name)
  }
  return await insertSpectatorMatch(name, match)
}