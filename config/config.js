import convict from 'convict';
import * as url from 'url';

const config = convict({
    env: {
        doc: 'Environments',
        format: ['local', 'test', 'production'],
        default: 'local',
        env: 'NODE_ENV',
        arg: 'env',
    },
    port: {
        doc: 'The port to expose the http service on',
        format: 'port',
        default: 8080,
        env: 'PORT',
        arg: 'port',
    },
    logLevel: {
        format: ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'],
        default: 'INFO',
        env: 'LOG_LEVEL',
        arg: 'log-level',
    },
});

const env = config.get('env');
config.loadFile(url.fileURLToPath(new URL(`config.${env}.json`, import.meta.url)));
config.validate();

export default config;
