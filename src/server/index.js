

const Hapi = require('@hapi/hapi');

const dummyData = [
  { id: 123, name: "is this the real life" },
  { id: 456, name: "is this just fantasy" },
  { id: 567, name: "caught in a landslide" },
  { id: 987, name: "no escape from reality" },
];



const init = async () => {

  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/quick',
    options: {
      cors: true
    },
    handler: async (request, h) => {
      console.log("Received request for quick data");
      return dummyData;
    }
  });

  server.route({
    method: 'GET',
    path: '/slow',
    options: {
      cors: true
    },
    handler: async (request, h) => {
      console.log("Received request for slow data");
      return await sleep().then(() => {
        console.log("Serving the slow data now");
        return dummyData;
      });
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

async function sleep() {
  return await new Promise(resolve => {
    setTimeout(resolve, 5000);
  });
}

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();