// SERVER:
// ========================================================
// 
// https://my-json-server.typicode.com/teaolivia/viralin-db
import * as db from './db.json';

function addItem(db, item) {
    var res = JSON.parse(db);
    db['Items'].push(item);
    res = JSON.stringify(obj);
}

function deleteItem(idx) {
    delete db.Items[idx];
}

function updateItem() {
    for (var i = 0; i < jsonObj.length; i++) {
        if (db[i].id === id) {
            db[i].username = newusername;
            return;
        }
    }
}

function getItem(item) {
    var obj = JSON.parse(db)
    var init = obj[0]
    var id = init.seller_id;
}

function objToString(obj) {
    return JSON.parse(fs.readFileSync('./content.json').toString())
}

export default Models;