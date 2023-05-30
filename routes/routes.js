const express = require("express")

const userRoutes = require("./user.routes")


const Routes = () => {
    const router = express.Router();
    router.use("/credit", userRoutes())
    return router
}

module.exports = Routes;