const config = {
    endpoint: "https://faculty-availability-dashboard.documents.azure.com:443/",
    key: "vMafL5RxxehjTBVymsnEtahAYAhnDYGEBYJAzJovmlbVIpPQnLILiCoqH9HSOV4tY4BiJP3DWv8jACDbhi0nUA==",
    databaseId: "FacultyAvailabilityDB",
    containerId: "FacultyAvailabilityCollection",
    partitionKey: { kind: "Hash", paths: ["/address"] }
};

module.exports = config;
