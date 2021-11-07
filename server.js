'use strict';

const Hapi = require('@hapi/hapi');
const {connection} = require('./db/entities/con')
const { getRoutes } = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
//ROutes Here Start
await connection();
await getRoutes(server);
//Routes Here Ends
    await server.start();
    console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
