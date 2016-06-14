import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?query='+ params.query + '&apikey=' + key;

    // return Ember.$.getJSON(url).then(function(responseJSON) {
    //   var bills = responseJSON.results;
    //   var promises = [];
    //   for (var bill of bills) {
    //     var legislatorURL = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id='+ bill.sponsor_id + '&apikey=' + key;
    //     var promise = Ember.$.getJSON(legislatorURL).then(function(responseJSON) {
    //       bill.state_rep = responseJSON.results[0].state_name;
    //     });
    //     promises.push(promise);
    //   }
    //   Ember.RSVP.allSettled(promises).then(function(response) {
    //     console.log(bills);
    //   });
    // });



    var billStorage;
      return Ember.$.getJSON(url).then(function(responseJSON) {
        billStorage = responseJSON.results;
        var j = 0;
        for (var i = 0; i < responseJSON.results.length; i++) {
        var legislatorURL = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id='+ responseJSON.results[i].sponsor_id + '&apikey=' + key;

        if (i < responseJSON.results.length - 1){
          Ember.$.getJSON(legislatorURL).then(function(responseJSON) {
            billStorage[j].state_rep = responseJSON.results[0].state_name;
            j++;
        })
      } else {
        return Ember.$.getJSON(legislatorURL).then(function(responseJSON) {
          billStorage[j].state_rep = responseJSON.results[0].state_name;
          j++;
          return billStorage;
        });
      }
  }
});
}
});
