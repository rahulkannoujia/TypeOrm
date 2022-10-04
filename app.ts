import express, { Application } from 'express'
//import morgan from 'morgan'
const mysql = require('mysql');

// Routes
//import IndexRoutes from './routes/index.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        //this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        //this.app.use(IndexRoutes);
       
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
    
    async dbConnection():Promise<void>{
        let con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "Rahul@123",
        });
        
        con.connect(function(err:any) {
          if(err) {
            console.log("db is not connected")
          }
          console.log("Connected!");
        });
    }
    

}