import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billLookup() {
      var params = {
        query: this.get('query')
      };
      this.sendAction('billLookup', params);
    }
  }
});
