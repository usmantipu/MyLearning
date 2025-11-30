const mysql = require('mysql');

class DatabaseService {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                throw err;
            }
            console.log('Connected to database');
        });
    }

    disconnect() {
        this.connection.end();
        console.log('Disconnected from database');
    }

    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        
    }

    async sp(sql, [param1, param2, param3, param4, param5, param6]) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [param1, param2, param3, param4, param5, param6], (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = DatabaseService;