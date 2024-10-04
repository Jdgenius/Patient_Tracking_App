import express, { request, Request, Response } from 'express'
import fs from 'fs'
import cors from 'cors'
const sqlite = require('sqlite3').verbose();

//Initializing database
const db = sqlite.Database(':memory:');
db.run(`CREATE TABLE patients (
    id INTEGER PRIMARY KEY, 
    name TEXT, age INTEGER, 
    start_date TEXT, 
    patient_status TEXT, 
    end_date TEXT, 
    reason TEXT)`
);

const app = express();
app.use(express.json());

//Update Table Function
function update_table(db: any, data: any) {
    db.run(`UPDATE db 
        SET name = ?,
            start_date = ?,
            patient_status = ?,
            end_date = ?,
            reason = ?
        WHERE id = ?`, 
        data.name, 
        data.start_date, 
        data.patient_status, 
        data.end_date, 
        data.reason,
        data.id
    );
}

app.use(cors({
    origin: '*',
}));

app.get('/', (_req: Request, res: Response) => {
    res.send("stuff");
});

app.get('/patients', (_req: Request, res: Response) => {
    /*
        name: string,
        age: number,
        start_date?: string | undefined,
        patient_status: string (awaiting, resolved, admitted),
        end_date?: string | undefined,
        reason: string,
    */
    const data = JSON.parse(fs.readFileSync('./patients.json', 'utf8'));
    res.status(200).json(data);
});

app.post('/', (req: Request, res: Response) => {
    const data = req.body;
    const id_num = data.id;
    db.get('SELECT * from db WHERE id = ?', id_num, (err: any, row: any) => {
        if(row) {
            res.send("Use Put");
        }else {
            db.run(`INSERT INTO db (
                id,
                start_date,
                patient_status,
                end_date,
                reason
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?
            );`, 
                data.id,
                data.start_date,
                data.patient_status,
                data.end_date,
                data.reason
            );
        }
    });
    res.send("Done");
});

app.put('/', (req: Request, res: Response) => {
    const data = req.body;
    const id_num = data.id;
    db.get('SELECT * from db WHERE id = ?', id_num, (err: any, row: any) => {
        if(row) {
            db.run(`UPDATE db 
                SET name = ?,
                    start_date = ?,
                    patient_status = ?,
                    end_date = ?,
                    reason = ?
                WHERE id = ?`, 
                data.name, 
                data.start_date, 
                data.patient_status, 
                data.end_date, 
                data.reason,
                data.id
            );
            res.send("Done");
        } else {
            console.log('No record found with the specified id:', id_num);
            res.send("Use Post to initialize entry");
        }
    });
});

app.listen(4000, () => {
    console.log("Listening on port 4000...");   
});

