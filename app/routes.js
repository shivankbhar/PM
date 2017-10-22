//let modelName = require('.././models/project');
let createEntity = require('./dbMethods/createEntity');
let getEntity = require('./dbMethods/getEntity');
module.exports = (app)=>{
    app.get('/projects',(req,res)=>{
        getEntity('project',req.query._id).then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.send(err);
            })
    })
    app.post('/project',(req,res)=>{
        if(req.body.projectCode != null){
            let projectRow={
                projectCode:req.body.projectCode,
                projectName:req.body.projectName,
                clientManager:req.body.clientManager,
                internalManager:req.body.internalManager,
                functionalPrimary:req.body.functionalPrimary,
                automationPrimary:req.body.automationPrimary,
                productsImpacted:req.body.productsImpacted,
            }
            createEntity('project',projectRow).then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.send(err);
            })
        }
        else{
            conslole.log('Entity Not Found')
        }   
    });
    
    app.get('/releases',(req,res)=>{
        getEntity('release',req.query._id).then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.send(err);
            })
    })
    app.post('/release',(req,res)=>{
        if(req.body.releaseDate != null){
            let releaseRow={
                releaseDate:req.body.releaseDate,
                projects:req.body.projectId,
                teamMember:req.body.teamMember,
                RFC:req.body.RFC,
                scope:req.body.scope,
                estimatedHours:req.body.estimatedHours,
                plannedStartDate:req.body.plannedStartDate,
                plannedEndDate:req.body.plannedEndDate,
                actualStartDate:req.body.actualStartDate,
                actualEndDate:req.body.actualEndDate,
            }
            createEntity('release',releaseRow).then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.send(err);
            })
        }
        else{
            conslole.log('Entity Not Found');
        }   
    });
    app.get('*',(req,res)=>{
        res.send('Error 404: Page Not Found');
    })
}