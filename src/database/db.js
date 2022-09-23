import { Database } from 'sqlite-async'; 

Database.open('./src/database/database3.db')

/* 

CREATE TABLE:

.then(function execute(db) {

    return db.exec(`
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

}) */

.then( async (db)=>{ 
/*     

INSERT DATA:
await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends

        ) VALUES (
            "-51.222473",
            "-30.0393369",
            "Lar das meninas",
            "Presta assistencia a crianças de 01 a 12 anos que se encontram em situação de risco social",
            "96927970",
            "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "Venha como se sentir a vontade e traga muito amor para dar",
            "Horário de visitas Das 12 até 19h",
            "1"
        );
    `) */

//CONSULT DATA
    const selectedData = await db.all(`SELECT * FROM orphanages WHERE ID='1'`)       
    console.log(selectedData) 
    module.exports = selectedData;
/* 

DELETE: 
await db.run(`DELETE FROM orphanages WHERE ID='2'`)   

 */
})

.catch(err => {console.log("error")})

/*

https://www.npmjs.com/package/sqlite-async


*/
 
