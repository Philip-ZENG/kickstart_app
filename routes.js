// Set up dynamic routing with the `next-routes` modules
const routes = require('next-routes')();

// Define a new routes mapping (url -> page in the react page system)
routes
  // Specifically define the `/campaigns/new` mapping to avoid being routed to `/campaigns/show` page 
  .add('/campaigns/new', '/campaigns/new')
  // Define the pattern that has some string after `/campaigns/` to map to our target url, 
  // the dynamic variable can be refered to by its name `address`
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;