/**
 * @file The controller for tree grid columns.
 * @author maoliang
 */

var TreeGrid = (function (module) {
    module.ColumnController = Ember.ObjectController.extend({
        title: function (key, value) {
            var model = this.get('model');

            if (value === undefined) {
                var title = model.get('title');
                return title;
            } else {
                // no setter.
            }
            
            return false;
        }.property('model.title'),
        
        width: function (key, value) {
            var model = this.get('model');

            if (value === undefined) {
                var width = model.get('width');
                return width;
            } else {
                // no setter.
            }
            
            return false;
        }.property('model.width'),
    });

    return module;
})(TreeGrid || {});
