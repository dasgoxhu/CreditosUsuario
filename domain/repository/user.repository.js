
module.exports = class UserRepository{
    constructor(model){
        this.model = model
    }

    save(user) {
        return new Promise((resolve, reject) => {
            this.model(user).save()
            resolve(user)
            reject(console.log("Error Ya esxiste"))
        });
    }

    findAll(){
        return new Promise((resolve, reject) => {
           let users = this.model.find({state:{$in:["Pendiente","Urgente"]}})
           resolve(users)
        })
    }

    findByID(id){
        return new Promise((resolve, reject) => {
            this.model.find({credirld: id})
                .then((users) => resolve(users));
        });
    }
}



