import logger from 'winston';

function init() {

}

function log(error) {
    console.error(error);
    logger.log(0,error);
}

export default {
    init,
    log
}