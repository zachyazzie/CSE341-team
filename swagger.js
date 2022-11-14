const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'D&D Character Sheet API',
    description: 'The D&D Character Sheet API will provide game players access to their D&D character sheet, including their character name, stats, inventory, general information, and character notes.',
  },
  host:'dndapi.onrender.com',
  schemes: [
    'http', 'https'
  ],
};

const outputFile = './routes/swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
