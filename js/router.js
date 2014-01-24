/**
 * @author maoliang
 */

DemoApp.Router.map(function () {
    this.resource('treeGridControl', { path: '/' });
});

DemoApp.TreeGridControlRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('treeGridModel');
    }
});