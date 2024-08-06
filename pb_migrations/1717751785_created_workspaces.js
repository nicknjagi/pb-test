/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w8tn1vl0fsuq2g4",
    "created": "2024-06-07 09:16:25.252Z",
    "updated": "2024-06-07 09:16:25.252Z",
    "name": "workspaces",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fstyko5v",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w8tn1vl0fsuq2g4");

  return dao.deleteCollection(collection);
})
