db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "andri",
                full_name: "andri"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "Wijayanto",
                full_name: "Wijayanto"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["andri", "Wijayanto", "Thomas"]
                }
            },
            update: {
                $set: {
                    full_name: "andri Wijayanto Thomas"
                }
            }
        }
    }
])