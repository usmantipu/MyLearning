//This module is handy when multiple API tests are dependent on the same data. It can be used to store and share data across multiple test files.
module.exports = {
    //null values are set during execution
    baseURL: 'https://sandbox-gql-mirror.visp.net/graphql', 
    //baseURL: 'https://data.visp.net/graphql', //for app.visp.net
    authURL: 'https://api.ms-visp.net/authenticate',
    //authURL: 'https://auth.ms-visp.net/authenticate', //for app.visp.net
    
    authtoken: null,
    paymentId: null,
    paymentAmt: null
    
}