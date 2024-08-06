/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w8tn1vl0fsuq2g4")

  // remove
  collection.schema.removeField("e7gozins")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "48idofcb",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "94ms1jjy3seb2im",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w8tn1vl0fsuq2g4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e7gozins",
    "name": "accounts",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("48idofcb")

  return dao.saveCollection(collection)
})
