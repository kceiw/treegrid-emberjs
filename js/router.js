/**
 * @author maoliang
 */


DemoApp.Router.map(function () {
    this.resource('treeGridControl', function () {
        this.resource('treeGridcolumns', function () {
            this.resource('treeGridColumn');
        });
        this.resource('treeGridrows', function () {
            this.resource('treeGridRow');
        });
    });
});


/*
DemoApp.IndexRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('treeGridControl');
    }
});
*/

DemoApp.IndexRoute = Ember.Route.extend({
    model: function () {
        return Ember.RSVP.hash({
            columns: this.store.find('treeGridColumnModel'),
            rows: this.store.find('treeGridRowModel'),
        });
    },
});
