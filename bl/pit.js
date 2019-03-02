import { insertPitScouting, deletePitScouting, pitScoutingExists } from "../dal/pit/team"

export async function savePitScouting(form) {
  const {team} = form
  delete form.team

  if (await pitScoutingExists(team)) {
    await deletePitScouting(team)
  }
  return await insertPitScouting(team, form)
}