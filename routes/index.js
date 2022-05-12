const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
import product   from "../data/product";
const demo = require('./demo.route');

const r = Router();

r.use('/demo', demo);

r.get('/', (req, res) => res.json(product));

module.exports = r;
