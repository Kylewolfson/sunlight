import Ember from 'ember';

export default Ember.Component.extend({
  capitalChamber: Ember.computed('chamber', function() {
    var chamber = this.get('chamber');
    chamber = chamber.charAt(0).toUpperCase() + chamber.slice(1);
    return chamber;
  })
});
