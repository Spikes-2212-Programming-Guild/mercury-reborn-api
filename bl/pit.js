import {addPitScouting} from "../dal/pit/team"

export async function savePitScouting(scoutingForm) {

  const {team} = scoutingForm
  delete scoutingForm.team
  return await addPitScouting(team)
}