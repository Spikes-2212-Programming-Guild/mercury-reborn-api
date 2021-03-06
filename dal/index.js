import {MongoClient} from "mongodb"
import * as field from "./field/team"
import * as pit from "./pit/team"
import * as spectator from "./spectator/match"

const initializeConnection = async (url, dbName , collectionNames) => {
  const client = await MongoClient.connect(url)
  const db = await client.db(dbName)
  const fieldCollection = await db.collection(collectionNames.field)
  const pitCollection = await db.collection(collectionNames.pit)
  const spectatorCollection = await db.collection(collectionNames.spectator)
  field.setCollection(fieldCollection)
  pit.setCollection(pitCollection)
  spectator.setCollection(spectatorCollection)

}


export {
  initializeConnection
}
