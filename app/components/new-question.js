import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        // notes: this.get('notes'),
        time: Date.now()
      };
      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
      this.set('name', "");
      this.set('question', "");
      this.set('notes', "");
    }
  }
});
