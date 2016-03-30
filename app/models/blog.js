import DS from 'ember-data';

export default DS.Model.extend({
    post: DS.attr(),
    image: DS.attr()
});
