// Use test database
// use test;

// create role
db.createRole({
    role: "find_and_insert",
    privileges: [],
    roles: [
        {
            role: "read",
            db: "test"
        }
    ]
});

// Get all roles
db.getRoles({ showPrivileges: true });

// update role
db.updateRole("find_and_insert", {
    privileges: [
        {
            resource: {
                db: "test",
                collection: "products"
            },
            actions: [ "insert" ]
        }
    ],
    roles: [
        {
            role: "read",
            db: "test"
        }
    ]
});

// Add use with role
db.createUser({
    user: "andri",
    pwd: "andri", 
    roles: [ "find_and_insert" ]
});

// Connect to mongo server
// mongo --username andri --password andri --authenticationDatabase test

// Insert product [SUCCESS]
db.products.insert({
    "_id" : 10,
    "name" : "iPad Pro 99 2099",
    "price" : NumberLong(20000000),
    "category" : "tablet",
    "tags" : [
        "apple",
        "ipad",
        "tablet",
    ],
    "lastModifiedDate" : new Date(),
    "stock" : 10,
    "ratings" : [
        100
    ]
});

// Delete product [FAILED]
db.products.deleteOne({
    _id: 10
});

// Update product [FAILED]
db.products.updateOne({
    _id: 10
},{
    $set: {
        category: "food"
    }
});

// Insert Customer [FAILED]
db.customers.insertOne({
    _id: "Wijayanto",
    name: "Thomas Andri Wijayanto"
});