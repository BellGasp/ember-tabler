import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  age: DS.attr(),
  nickname: DS.attr(),
  evil: DS.attr(),

});