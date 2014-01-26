/**
 * @author maoliang
 */

DemoApp.Router.map(function () {
    this.resource('treeGridControl', { path: '/' });
});

DemoApp.TreeGridControlRoute = Ember.Route.extend({
    model: function () {
        return Ember.Object.create({
            columns: this.store.find('treeGridColumnModel'),
            rows: this.store.find('treeGridRowModel'),
        });
    },
});