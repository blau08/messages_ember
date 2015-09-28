import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.set('addAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
