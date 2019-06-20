// SERVER:
// ========================================================
// 
// https://my-json-server.typicode.com/teaolivia/viralin-db
import './db'

function addItem(db, item) {
    var res = JSON.parse(db);
    db['Items'].push(item);
    res = JSON.stringify(obj);
}

function deleteItem(idx) {
    delete db.Items[idx];
}

function updateItem() {
    
}

function getItem() {
    return db['Items']
}