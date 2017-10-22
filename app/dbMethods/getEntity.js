let modelName =(model)=>{
    return require('../.././models/'+ model);
}
let getEntity = (model,id)=>{
    let promise = new Promise((resolve,reject)=>{
        if(id==undefined){
            id={}
        }
        else{
            id={
                _id:id
            }
        }
        modelName(model).find(id,(err,data)=>{
            if(err){
                reject('Row Not found:' + err) 
            }
            else{
                resolve(data)
            }
        });
    })
    return promise;
}
module.exports = getEntity;