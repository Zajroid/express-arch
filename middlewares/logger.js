import log4js from 'log4js';

log4js.configure({
    appenders: { logs: {type: "file", "filename": "logs.log" } },
    categories: { default: { appenders: ["logs"], level: "all" } },
})

const logger = log4js.getLogger("logs");

logger.info('INFO!!!');
logger.fatal('FATAL');
logger.debug('Deb');


