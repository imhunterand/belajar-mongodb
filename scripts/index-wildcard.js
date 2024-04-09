// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
});

// Insert many customers
db.customers.insertMany([
    {
        _id: "andri",
        full_name: "andri",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "joko",
        full_name: "Joko",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "thomas",
        full_name: "thomas",
        customFields: {
            motherName: "Tini",
            passion: "Entepreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain();
db.customers.find({
    "customFields.ipk": 3.2
}).explain();
db.customers.find({
    "customFields.hobby": "Gaming"
}).explain();