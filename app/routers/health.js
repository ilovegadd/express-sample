"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 健康チェックルーター
 *
 * @ignore
 */
const express = require("express");
const router = express.Router();
// import * as createDebug from 'debug';
const httpStatus = require("http-status");
const validator_1 = require("../middlewares/validator");
// const debug = createDebug('sskts-express-sample:routers:health');
router.get('', (_1, _2, next) => {
    next();
}, validator_1.default, (_, res) => {
    res.status(httpStatus.OK).contentType('text/plain').send('healthy!');
});
exports.default = router;
