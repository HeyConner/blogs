import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogForm() {
      this.set('addNewBlog', true);
    },

    save1() {
      var params = {
        post:this.get('post'),
        image: this.get('image')
      };
      this.set('addNewBlog', false);
      this.sendAction('save2', params);
    }
  }
});
