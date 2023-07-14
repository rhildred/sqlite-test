const fs = require('fs');
const initSqlJs = require('sql.js');
const filebuffer = fs.readFileSync('test.sqlite');

async function main() {
  const SQL = await initSqlJs();
  const db = new SQL.Database(filebuffer);
  let results = db.exec('SELECT * FROM users');
  console.log(JSON.stringify(results));
}

main();
