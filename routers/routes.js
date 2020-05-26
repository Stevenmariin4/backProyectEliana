const express = require('express');
const router = express.Router();
const controller = require('../contoller/index_controller')
const response = require('../contoller/response')


router.post('/buyProduct', buyProduct);
router.get('/list/buyProduct', getProducts)

async function buyProduct(req, res, next) {
    if (!req.body.id) {
        response.error(req, res, "Id not found", 400);

    } else if (req.body != undefined && req.body.id) {
        const datos = await controller.post(req.body)
        response.success(req, res, datos, 201);
    } else {
        response.error(req, res, "Sin Datos para procesar", 404)
    }

}

async function getProducts(req, res, next) {
    const datos = await controller.getProduct()
    response.success(req, res, datos, 200);

}

module.exports = router;