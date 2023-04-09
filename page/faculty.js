// Retrieve all records from Cosmos DB
const endpoint = "https://faculty-availability-dashboard.documents.azure.com:443/";
const key = "vMafL5RxxehjTBVymsnEtahAYAhnDYGEBYJAzJovmlbVIpPQnLILiCoqH9HSOV4tY4BiJP3DWv8jACDbhi0nUA==";
const database = "FacultyAvailabilityDB";
const container = "FacultyAvailabilityCollection";

const cosmos = require('@azure/cosmos');

const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key });

async function getRecords() {
  const query = "SELECT * FROM c";
  const containerClient = client.database(database).container(container);
  const { resources: items } = await containerClient.items.query(query).fetchAll();
  return items;
}

// Display records in a HTML table
const availabilityTable = document.getElementById("availabilityTable");

async function displayRecords() {
  const records = await getRecords();
  records.forEach((record) => {
    const row = availabilityTable.insertRow();
    const facultyNameCell = row.insertCell();
    const statusCell = row.insertCell();
    facultyNameCell.innerHTML = record.facultyName;
    statusCell.innerHTML = record.status;
    if (record.status.toLowerCase() === "available") {
      statusCell.style.backgroundColor = "green";
    } else {
      statusCell.style.backgroundColor = "red";
    }
  });
}

// Refresh records every 5 seconds
setInterval(() => {
  availabilityTable.innerHTML = `
    <tr>
      <th>Faculty Member</th>
      <th>Status</th>
    </tr>
  `;
  displayRecords();
}, 5000);

displayRecords();
