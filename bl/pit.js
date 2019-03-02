import { insertPitScouting, dropPitScouting, pitScoutingExists } from "../dal/pit/team"

export async function savePitScouting(form) {
  const {team} = form
  delete form.team

  if (await pitScoutingExists(team)) {
    await dropPitScouting(team)
  }
  return await insertPitScouting(team, form)
}