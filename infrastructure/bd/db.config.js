const mongoose = require('mongoose')

/**
 * Modelos
 */
require('../../domain/models/user.model')

/**
 * Conectar a la bd
 */
exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/credit")
        .then(() => console.info("Conexion se realizo con exito!"))
        .catch((error) => console.error("Tenemos un error en la conexion", error));
}