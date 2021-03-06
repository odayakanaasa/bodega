import config from 'bodega/config/environment';

export default function() {
  this.autostart = true;
  this.namespace = `/${config.apiNamespace}`;
  this.get('/items');

  this.passthrough('https://api.stripe.com/**');
  this.passthrough('https://checkout.stripe.com/**');
  this.passthrough('https://localhost.ssl:3000/**');
  this.passthrough('http://localhost:3000/**');
  this.passthrough('https://api.shop-201.com/**');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.post('/charges');
}
