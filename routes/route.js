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
        return pool.query`select u.UserId,u.UserName,u.[Password],u.FirstName,u.LastName,u.CultureInfoCode,u.Email,ur.RoleName,ur.UserRoleId,u.TypeRowActiveId from [tbl_User] u join tbl_UserAccessRole uar on uar.UserId=u.UserId and uar.IsOverride=0
        join tbl_UserRole ur on ur.UserRoleId=uar.UserRoleId where uar.AssetTreeId=8199 and u.typerowactiveid!=2 order by u.LastName asc`
      }).then(result => {
        res.json(result.recordsets[0]);
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
        res.json(result.recordsets[0]);
      }).catch(err => {
        res.json(err);
          
        // ... error checks
      });
});

router.get('/pausereasons',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select pausereasonid,pausereasontext,isactive from tbl_PauseReasons where PropertyId=8199`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/cleannesslevel',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`
      select LevelOfCleanlinessID,LevelOfCleanlinessDefinition,IsActive,FailOrPassLevel,PerfectLevel,RatingLevel from tbl_CleanlinessLevel where IsActive=0 and PropertyId=8199`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/interruptreasons',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`
      select ReasonID,ReasonDesc,IsActive,IsBreak from tbl_InterruptReasons where  PropertyId=8199 and IsActive=0`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/notes',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select NoteId,Note,IsActive from tbl_Notes where propertyid=8199 and isactive=0`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});

router.get('/shifts',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select ShiftId,ShiftName,StartTime,Active from tbl_Shifts where propertyid=8199 order by ShiftName`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
module.exports=router;