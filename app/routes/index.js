import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      console.log(params.zip);
      this.transitionTo('results', params.zip);
    },
    billLookup(params) {
      this.transitionTo('bill-results', params.query);
    }
  }
});
