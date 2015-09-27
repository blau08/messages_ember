import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
