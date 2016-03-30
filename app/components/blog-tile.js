import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing:false,
  updateBlogForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false)
    },
    update(blog, params) {
      this.sendAction('update', blog, params);
    },
    delete(rental) {
      if(confirm('Are you sure you want to delete this Posting?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
