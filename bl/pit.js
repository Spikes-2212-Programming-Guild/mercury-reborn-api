import * as dal from "../dal/pit/team"

export async function savePitScouting(form) {
  const {team} = form
  delete form.team

  if (await dal.pitScoutingExists(team)) {
    await dal.deletePitScouting(team)
  }
  return await dal.insertPitScouting(team, form)
}

export async function getAllSavedTeamIds() {
  return await dal.getAllSavedTeamIds()
}