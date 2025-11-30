const DatabaseService = require('../utils/databaseService.js');
const dbConfig = require('../utils/dbConfig.js');

class databaseAccess{

   async testQuery(){

        const databaseService = new DatabaseService(dbConfig);
        databaseService.connect();

        const sql = 'SELECT * FROM isp_setting WHERE isp_id = ? LIMIT 10';
        const params = 877;
        this.userDetails = await databaseService.query(sql, params);
        console.log(this.userDetails);
        databaseService.disconnect();
    }

    async testSp(){

        const databaseService = new DatabaseService(dbConfig);
        

        try {
            databaseService.connect();
    
            const sql = 'CALL sp_CustomInvoiceGeneration(?,?,?,?,?,?)';
            const params = [877, 2461744, 51552, 66773, 1, 'TRUE'];
            const userDetails = await databaseService.sp(sql, params);
    
            console.log(userDetails);
        } catch (error) {
            console.error('Error during testSp execution:', error);
        } finally {
            databaseService.disconnect();
        }
    }

    async verifySubscriberInvoicePerPackage(parameters){

        const databaseService = new DatabaseService(dbConfig);
        console.log('Test - DB method called in databaseAccess.js...');
        console.log(parameters);

        try {
            databaseService.connect();
    
            const sql = 'CALL SP_DDT_ENGINE_SCRIPT(?,?,?,?,?,?)';
            //const params = [877, 2461744, 51552, 66773, 1, 'TRUE'];
            const params = parameters;
            const userDetails = await databaseService.sp(sql, params);
    
            console.log(userDetails);
            
        } catch (error) {
            console.error('Error during Sp execution:', error);
            
        } finally {
            databaseService.disconnect();
        }
    }

}
module.exports = new databaseAccess();