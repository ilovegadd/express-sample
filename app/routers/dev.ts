/**
 * devルーター
 *
 * @ignore
 */
import * as express from 'express';
const router = express.Router();

import * as createDebug from 'debug';

const debug = createDebug('sskts-express-sample:routers:dev');

router.get(
    '/500',
    () => {
        throw new Error('500 manually');
    });

router.get(
    '/environmentVariables',
    (req, res) => {
        debug('ip:', req.ip);
        res.json({
            data: {
                type: 'envs',
                attributes: process.env
            }
        });
    });

export default router;
