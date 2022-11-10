const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'dandd',
    description: 'This place has spells!',
  },
  host: '',
  schemes: [
    'https', 'https'
  ],
};

const outputFile = './routes/swagger-output.json';
const endpointsFiles = ['./index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
