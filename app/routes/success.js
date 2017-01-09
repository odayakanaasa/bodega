import Ember from 'ember';

// For testing visit /success/test
export default Ember.Route.extend({
  model(params) {
    if(params.id === 'test') {
      return fakeRecord(this.store);
    }

    // Backend for fetching charges not implemented
    // Currently we always pass in a model after a purchase is complete
    // see component:apple-pay-button
  }
});

function fakeRecord(store) {
  let item = store.peekRecord('item', '1');
  return store.createRecord('charge', {
    item,
    price: item.price,
    id: '12345',
    token: '12345ABCDE',
    shippingContact: {
      givenName: 'Bob',
      familyName: 'Jones',
      emailAddress: 'bob@201-created.com',
      addressLines: [
        '240 Kent Ave.',
        'Suite 7'
      ],
      locality: 'Brooklyn',
      administrativeArea: 'New York',
      postalCode: '11234'
    }
  });

}
