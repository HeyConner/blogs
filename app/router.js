import Ember from 'ember';
import config from './config/environment';

export default Ember.Route.extend({
model(params) {
  return this.store.findRecord('blog', params.blog_id);
},
});

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('create', {path: '/rental/:rental_id'});
});

export default Router;
