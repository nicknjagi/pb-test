/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nw8314ui2ert6t0")

  // remove
  collection.schema.removeField("wkt7envu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pl75ir4d",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nw8314ui2ert6t0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkt7envu",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("pl75ir4d")

  return dao.saveCollection(collection)
})
