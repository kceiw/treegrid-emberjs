/**
 * @author maoliang
 */


DemoApp.Router.map(function () {
});


DemoApp.IndexRoute = Ember.Route.extend({
    model: function () {
        return Ember.RSVP.hash({
            columns: this.store.find('treeGridColumnModel'),
            rows: this.store.find('treeGridRowModel'),
        });
    },
});
