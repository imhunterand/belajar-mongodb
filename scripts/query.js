// select *  from customers where _id = 'Wijayanto'
db.customers.find({
    _id: "Wijayanto"
});

// select * from customers where name = 'Thomas Andri Wijayanto'
db.customers.find({
    name: "Thomas Andri Wijayanto"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});