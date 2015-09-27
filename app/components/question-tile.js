import Ember from 'ember';

export default Ember.Component.extend({
  updateRental: false,
    actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
