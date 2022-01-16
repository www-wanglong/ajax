const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function run () {
  try {
    await client.connect()
    const testDb = client.db('test')
    const usersCollection = testDb.collection('users')
    const ret = await usersCollection.find()

    console.log(await ret.toArray())
  } catch (error) {
    console.log('error')
  } finally {
    await client.close()
  }
}

run()