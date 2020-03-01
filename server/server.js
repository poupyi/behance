const express = require('express');

const app = express();

const items = [
  {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  },
];

const items2 = [
  {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit2',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  },
];

const items3 = [
  {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#f0f0f0'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: false,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#c0dbe9'
  }, {
    imageUrl: 'assets/sphere.png',
    isItemHot: true,
    itemName: 'Picklesuit3',
    creator: 'John Doelson',
    price: 155.00,
    backgroundColor: '#efebec'
  },
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/products', (req, res) => {
  res.send(items.concat(items2).concat(items3));
});

app.get('/products/popular', (req, res) => {
  res.send(items);
});

app.listen("8080", () => {
  console.log("Server Started, listening on localhost:8080");
});