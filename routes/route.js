const express=require('express');
const router=express.Router();
const mssql=require('mssql');

//database configuration
const config = {
  user: 'sa',
  password: 'aDmin@123',
  server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
  database: 'OptiiAngular',

  options: {
      encrypt: true // Use this if you're on Windows Azure
  }
}


router.get('/users',(req,res,next)=>{
    new mssql.ConnectionPool(config).connect().then(pool => {
        return pool.query`select * from [tbl_User] u join tbl_UserAccessRole uar on uar.UserId=u.UserId and uar.IsOverride=0
        join tbl_UserRole ur on ur.UserRoleId=uar.UserRoleId where uar.AssetTreeId=8199`
      }).then(result => {
        res.json(result.recordsets);
      }).catch(err => {
        res.json(err);
          
        // ... error checks
      });
});

router.get('/roles',(req,res,next)=>{
    new mssql.ConnectionPool(config).connect().then(pool => {
        return pool.query`select ur.UserRoleId, ur.RoleName, ur.Active,tjf.Name from tbl_UserRole ur left join tbl_UserRoleJobFunction urjf on urjf.UserRoleId = ur.UserRoleId and urjf.JobFunctionTypeId=6
        left join tbl_TypeJobFunction tjf on tjf.JobFunctionTypeId=urjf.JobFunctionTypeId where ur.IsAnOverriddenUserRole=0 and ur.AssetTreeId=8199`
      }).then(result => {
        res.json(result.recordsets);
      }).catch(err => {
        res.json(err);
          
        // ... error checks
      });
});

module.exports=router;