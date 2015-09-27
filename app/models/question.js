import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
