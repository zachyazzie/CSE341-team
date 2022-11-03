const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'dandd',
    description: 'This place has spells!',
  },
  host: '',
  schemes: [
    'http', 'http'
  ],
};

const outputFile = './src/routes/swagger-output.json';
const endpointsFiles = ['./index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);