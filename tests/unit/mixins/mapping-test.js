import Ember from 'ember';
import MappingMixin from '../../../mixins/mapping';
import { module, test } from 'qunit';

module('MappingMixin', {
  needs: ['service:geolocation']
});

test('foo', function(assert) {
  var MappingObject = Ember.Object.extend(MappingMixin);
  var subject = MappingObject.create();
  assert.ok(subject.foo());
});
