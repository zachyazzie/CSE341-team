

const supertest = require( "supertest");
const app = "http://localhost:8080"
const api = supertest(app)



test('Spells are returned as JSON', async ()=>{
    await api
    .get('/spell')
    .expect(200)
    .expect('Content-Type', 'application\/json')
    .end(function(err, res) {
        if (err) throw err;
      })
})

module.exports = app;