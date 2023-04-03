CREATE DATABASE FacultyAvailabilityDB;

USE FacultyAvailabilityDB;

CREATE CONTAINER FacultyAvailabilityCollection
(
    id STRING PRIMARY KEY,
    address STRING,
    name STRING,
    status STRING
)
PARTITION BY HASH(Address)
WITH ( "partitionCount" = 10 );
