import express, { Request, Response } from 'express'
import fs from 'fs'
import cors from 'cors'


const app = express();

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

app.listen(4000, () => {
    console.log("Listening on port 4000...");   
});

