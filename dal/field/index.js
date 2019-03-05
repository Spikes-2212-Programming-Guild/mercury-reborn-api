import {MongoClient} from "mongodb"
import * as team from "./team"

const initializeConnection = async (url, dbName , collectionName) => {
  const client = await MongoClient.connect(url)

  const db = await client.db(dbName)
  const collection = await db.collection(collectionName)

  team.setCollection(collection)
  exp = {
    initializeConnection,
    team
  }

}


export let exp = {initializeConnection}
