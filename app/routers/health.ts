/**
 * 健康チェックルーター
 *
 * @ignore
 */
import * as express from 'express';
const router = express.Router();

// import * as createDebug from 'debug';
import * as httpStatus from 'http-status';

import validator from '../middlewares/validator';
// const debug = createDebug('sskts-express-sample:routers:health');

router.get(
    '',
    (_1, _2, next) => {
        next();
    },
    validator,
    (_, res) => {
        res.status(httpStatus.OK).contentType('text/plain').send('healthy!');
    });

export default router;
