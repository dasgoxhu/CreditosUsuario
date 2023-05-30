const { json } = require("express");

module.exports = (repository) => {
    async function execute(model){
        if(model.state == "activo"){
            return Promise.resolve("el usuario "+model.userName+" ya tiene un credito y por ende no puede tener mas")
        }
        else if(model.wage * 50 < model.amountPaid){
            return Promise.resolve("el usuario "+model.userName+" no puede conseguir los creditos porque supera 50 veces su salario")
        }
        else {
            if(model.wage / 2 <= model.amountPaid / model.monts && model.monts <= 36){
                return Promise.resolve("el usuario "+model.userName+" puede tener un credito de " + model.monts + 
                " meses hasta 36 y la cuota le queda en: " + model.amountPaid / model.monts + " y queda vinculado al documento: " + model.userDocument)
            }
            else{
                return Promise.resolve("para el usuario "+model.userName+" el credito no es necesario porque ya posee mas dinero o se pasa de las 36 cuotas")
            }
        }   
    }

    return {execute}
}
