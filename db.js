const Database=require('better-sqlite3');
const db=new Database('senmarket.db');
db.pragma('journal_mode = WAL');
db.exec(`
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,email TEXT UNIQUE NOT NULL,password TEXT NOT NULL,role TEXT NOT NULL DEFAULT 'customer',phone TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,price INTEGER NOT NULL,category TEXT NOT NULL,image TEXT,description TEXT,seller_id INTEGER,stock INTEGER NOT NULL DEFAULT 0,active INTEGER NOT NULL DEFAULT 1,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,total INTEGER NOT NULL,status TEXT NOT NULL DEFAULT 'En préparation',payment_method TEXT NOT NULL DEFAULT 'À la livraison',payment_status TEXT NOT NULL DEFAULT 'En attente',address TEXT,phone TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS order_items(id INTEGER PRIMARY KEY AUTOINCREMENT,order_id INTEGER NOT NULL,product_id INTEGER NOT NULL,qty INTEGER NOT NULL,price INTEGER NOT NULL);
`);
const count=db.prepare('SELECT COUNT(*) c FROM products').get().c;
if(!count){const ins=db.prepare('INSERT INTO products(name,price,category,image,description,stock) VALUES(?,?,?,?,?,?)');[
['Smartphone Android',85000,'Téléphones','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900','Smartphone moderne et performant.',15],
['Sneakers Urban',25000,'Chaussures','https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900','Chaussures confortables pour tous les jours.',25],
['Casque Bluetooth',18000,'Audio','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900','Casque sans fil avec bonne autonomie.',20],
['Sac à dos',15000,'Mode','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900','Sac pratique pour école et travail.',30]
].forEach(x=>ins.run(...x));}
module.exports=db;
