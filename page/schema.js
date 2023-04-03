const { CosmosClient } = require("@azure/cosmos");
const config = require("./config");

const client = new CosmosClient(config);

const database = client.database(config.databaseId);
const container = database.container(config.containerId);

module.exports = {
    client,
    database,
    container,
};
