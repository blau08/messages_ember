import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveAnswer(params) {
      console.log('got to question route handler');
      var newAnswer = this.store.createRecord('answer', params);
      // var question = params.question;
      // question.get('answers').addObject(newAnswer);
      // newAnswer.save().then(function() {
      //   return question.save();
      // });
      newAnswer.save();
      params.question.save().then(function(question) {
        question.reload();
      });
      this.transitionTo('question', params.question);
    },
  }
});
