module.exports = {
    info: (message) => {
        console.log(`INFO: ${message}`);
    },
    warn: (message) => {
        console.warn(`WARN: ${message}`);
    },
    error: (message) => {
        console.error(`ERROR: ${message}`);
    },
    log: (level, message) => {
        switch (level) {
            case 'info':
                this.info(message);
                break;
            case 'warn':
                this.warn(message);
                break;
            case 'error':
                this.error(message);
                break;
            default:
                console.log(message);
        }
    }
};