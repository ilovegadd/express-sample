/**
 * ロガーミドルウェア
 *
 * @module
 */
import * as log4js from 'log4js';

const env = (process.env.NODE_ENV === undefined) ? 'development' : process.env.NODE_ENV;

log4js.configure({
    appenders: [
        {
            category: 'access', // アクセスログ
            type: 'console'
        },
        {
            category: 'system', // その他のアプリログ(DEBUG、INFO、ERRORなど)
            type: 'console'
        },
        {
            type: 'console'
        }
    ],
    levels: {
        access: (env === 'development') ? log4js.levels.ALL.toString() : log4js.levels.OFF.toString(),
        system: (env === 'production') ? log4js.levels.INFO.toString() : log4js.levels.ALL.toString()
    },
    replaceConsole: (env === 'production') ? false : true
});

export default log4js.connectLogger(log4js.getLogger('access'), {});
