migrate((db) => {
  const collection = new Collection({
    "id": "8hxwhwhynglh6ha",
    "created": "2023-05-12 06:43:49.404Z",
    "updated": "2023-05-12 06:43:49.404Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ow1qyp0u",
        "name": "title",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("8hxwhwhynglh6ha");

  return dao.deleteCollection(collection);
})
