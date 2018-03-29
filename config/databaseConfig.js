//database configuration
module.exports={
     config : {
        user: 'sa',
        password: 'aDmin@123',
        server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
        database: 'OptiiAngular',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    },
     config1 : {
        user: 'sa',
        password: 'aDmin@123',
        server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
        database: 'Optii',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    },
    secret:'yoursecret'
}