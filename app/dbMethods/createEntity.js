let modelName =(model)=>{
    return require('../.././models/'+ model);
}
let createEntity = (model,insert)=>{
    let promise = new Promise((resolve,reject)=>{
        modelName(model).create(insert,(err,data)=>{
            if(err){
                reject('Row Not Added:' + err) 
            }
            else{
                resolve('Row Added')
            }
        });
    })
    return promise;
}
module.exports = createEntity;