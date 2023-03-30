setInterval(fetchData, 5000); // Fetch data every 5 seconds
function fetchData() {
    fetch("https://your-cosmosdb-account.documents.azure.com:443/dbs/FacultyAvailabilityDB/colls/FacultyAvailabilityCollection/docs", {
        headers: {
            "Authorization": "your-cosmosdb-key",
            "x-ms-version": "2018-06-18",
            "x-ms-date": new Date().toUTCString(),
            "Content-Type": "application/query+json"
        },
        method: "POST",
        body: JSON.stringify({
            query: "SELECT c.address, c.status FROM c"
        })
    })
    .then(response => response.json())
    .then(data => {
        const availabilityTable = document.getElementById("availabilityTable");
        // Clear the table
        while (availabilityTable.rows.length > 1) {
            availabilityTable.deleteRow(1);
        }
        // Add new rows
        data.forEach(doc => {
            const row = availabilityTable.insertRow();
            const addressCell = row.insertCell();
            addressCell.innerText = doc.address;
            const statusCell = row.insertCell();
            statusCell.innerText = doc.status;
            statusCell.style.backgroundColor = doc.status === "available" ? "green" : "red"; // Color the status cell based on the status value
        });
    })
    .catch(error => console.log(error));
}
