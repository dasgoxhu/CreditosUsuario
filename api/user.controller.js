const UserService = require("../domain/service/user.service")
const UserCommand = require("../domain/service/user.commands")

module.exports = (repository) => {

    const findAll = (req, res) => {
        UserService(repository)
        .execute()
        .then((result)=> res.send(result))
        .catch((err) => {
            console.error(err);
            res.sendStatus(500).json("Error al consultar!")
        });
    }

    const save = (req, res) => {
        const user = req.body

        UserCommand(repository)
        .execute(user)
        .then((result)=> res.send(result))
        .catch((err) => {
            console.error(err);
            res.send("Cambios Realizados")
        })
    }
    
    return {
        findAll,
        save,
    }
}