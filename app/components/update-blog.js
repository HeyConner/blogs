import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(rental) {
      var params = {
        post: this.get('post'),
        image: this.get('image'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
