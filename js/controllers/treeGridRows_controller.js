/**
 * @author maoliang
 */

DemoApp.TreeGridRowsController = Ember.ArrayController.extend({
    init: function () {
        this._super();
        console.log('TreeGridRowsController');
    },
    
    itemController: 'treeGridRow',
});