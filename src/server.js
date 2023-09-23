/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line no-unused-vars
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
