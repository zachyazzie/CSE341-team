// helper function to get http routes
// results will return this, as an example
// {
//   '/create': [ 'post' ],
//   '/all': [ 'get' ],
//   '/:id': [ 'get', 'put', 'delete' ]
// }
const routesFor = (router) => {
  const results = {};
  // get a map of the layer.route properties, that is the http request methods
  const routes = router.stack.map((layer) => layer.route);

  // load up the results object
  routes.forEach((route) => {
    // skip over loaduser entry
    if (!route) return;

    // on first iteration, initialize to empty array
    results[route.path] ||= [];

    // concatenate http methods in the methods properties for each route
    results[route.path] = results[route.path].concat(
      Object.keys(route.methods)
    );
  });

  return results;
};

module.exports = routesFor;