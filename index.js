import config from './config/config.js';

console.log('The environment (NODE_ENV) is:', config.get('env'));
console.log('The value of the "port" is:', config.get('port'));
console.log('The value of the "logLevel" is:', config.get('logLevel'));
