import { Factory } from 'ember-cli-mirage';
import { capitalize } from '@ember/string';
import faker from 'faker';

export default Factory.extend({

  age() {
    return Math.floor(Math.random() * Math.floor(95));
  },

  evil(index) {
    return index % 2 === 0;
  },

  name() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },

  nickname() {
    return capitalize(faker.hacker.noun());
  },

});