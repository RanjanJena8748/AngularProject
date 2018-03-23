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
const config1 = {
  user: 'sa',
  password: 'aDmin@123',
  server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
  database: 'Optii',

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

router.get('/workingarranements',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select WorkingArrangementId,Name,[Description],BaseHoursPerDay,Active from tbl_workingarrangement where PropertyId=8199`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/alllocationlist',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select  a.ZoneId,z.ZoneName,z.Active[ZoneActive],z.[Status]
      ,a.AreaId,a.AreaName,a.Active[AreaActive]
      ,s.SubAreaId,s.SubAreaName,s.[Active]SubAreaActive from tbl_area a with(nolock) 
          left join  tbl_zone z with(nolock) on a.ZoneId=z.ZoneId  and  z.[Status]= a.[Status]  and z.PropertyId=8199
          left join tbl_SubArea s with(nolock) on s.AreaId=a.AreaId  and a.[Status]=s.[Status] and s.PropertyId=8199 and a.PropertyId=8199
          where a.[Status]=1 order by z.zonename,a.AreaName,s.SubAreaName`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/devices',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
    return pool.request()
    .input('PropertyId', mssql.Int, 8199)
    .execute('[dbo].[usp_Device_Get]')
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/zones',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select ZoneId,ZoneName,Active from tbl_Zone where status=1 and PropertyId=8199`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/qrcodes',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select ReasonId,Reasons,[Status]Active from tbl_QRCodeReason where PropertyId=8199`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.get('/jobs',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select CheckListId,CheckListName,ParentId,Active from tbl_CheckList where Status=1 and PropertyId=8199 order by CheckListName`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});

router.get('/roster',(req,res,next)=>{
  new mssql.ConnectionPool(config).connect().then(pool => {
      return pool.query`select u.UserId, u.UserName, u.FirstName, u.LastName,case when ua.[DayOfWeek] is not null then 1 else 0 end [OnDuty],ua.ShiftId,r.rosterid,r.starttime,r.endtime,case when r.userid is not null then 1 else 0 end[isRoster] from [tbl_User] u join tbl_UserAccess uas on uas.UserId= u.UserId and uas.AssetTreeId=8199 left join tbl_UserAvailability ua on u.UserId=ua.UserId  and DayOfWeek =(SELECT DATEPART(dw,GETDATE())) and ua.TypeRowActiveId=0 and ua.PropertyId=8199 
      left join tbl_roster r on r.userid=u.UserId and convert(date,r.starttime)=convert(date,getdate()) 
      where u.TypeRowActiveId=0  order by u.LastName asc`
    }).then(result => {
      res.json(result.recordsets[0]);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});

router.get('/tasklists',(req,res,next)=>{
  new mssql.ConnectionPool(config1).connect().then(pool => {
      return pool.query`select u.LastName+', '+u.FirstName[username], r.UserId, sta.ZoneId, z.ZoneName, sta.AreaId, a.AreaName from Roster r left join [user] u on u.UserId=r.UserId
      left join tbl_StaffAssignment sta on r.UserId = sta.UserId and r.RosterId=sta.RosterId and r.PropertyId=8199
      and convert(date,r.starttime)=convert(date,sta.StartDateTime)
      left join tbl_Zone z on sta.ZoneId = z.ZoneId
      left join tbl_Area a on sta.AreaId= a.AreaId
      where convert(date,r.starttime)=convert(date,getdate())`
    }).then(result => {
      res.json(result.recordset);
    }).catch(err => {
      res.json(err);
        
      // ... error checks
    });
});
router.post('/roster',(req,res,next)=>{
 
    const UserId = req.body.UserId;
    const starttime = req.body.starttime;
    const endtime = req.body.endtime;
    const ShiftId = req.body.ShiftId;
  new mssql.ConnectionPool(config).connect().then(pool => {
    return pool.request()
    .input('UserId', mssql.Int, UserId)
    .input('StartTime', mssql.VarChar, starttime)
    .input('EndTime', mssql.VarChar, endtime)
    .input('ShiftId', mssql.VarChar, ShiftId)
    .execute('[dbo].[usp_SaveRoster]')
    }).then(result => {
      res.json(result.recordsets[0]);      
    }).catch(err => {
      res.json(err);
      // ... error checks
    });
});
module.exports=router;