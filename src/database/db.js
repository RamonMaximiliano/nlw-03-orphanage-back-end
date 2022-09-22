import { Database } from 'sqlite-async';

Database.open('./src/database/database3.db')
    .then(execute)
    .catch(err => {
        console.log("error")
    })

    function execute(db) {
        console.log("entrei nessa função")

        db.transaction((db) => {
            return Promise.all([
              db.run(`
              CREATE TABLE IF NOT EXISTS orphanages (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  lat TEXT,
                  lng TEXT,
                  name TEXT,
                  about TEXT,
                  whatsapp TEXT,
                  images TEXT,
                  instructions TEXT,
                  opening_hours TEXT,
                  open_on_weekends TEXT
              )
      `)
            ]);
          });
        }

/*

https://www.npmjs.com/package/sqlite-async


*/
 

