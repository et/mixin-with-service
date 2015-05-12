import Ember from 'ember';

export default Ember.Mixin.create({
  geolocation: Ember.inject.service(),

  foo: function() {
    var geolocation = this.get('geolocation');
    return geolocation.toString();
  }
});
