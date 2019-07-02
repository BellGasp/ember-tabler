import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  characters: null,

  init() {
    this._super(...arguments);

    //TEMPOO
    this.fetchRecords();
  },

  async fetchRecords(){
    let characters = await this.store.findAll('character');
    this.set('characters', characters);
  },

  actions:{
    fetchRecords(){
      this.fetchRecords();
    },
    goToPage(page){

    }
  }

});
