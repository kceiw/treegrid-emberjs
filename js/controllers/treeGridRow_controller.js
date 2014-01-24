/**
 * @author maoliang
 */

DemoApp.TreeGridRowController = Ember.ObjectController.extend({
    actions: {
        toggleExpansion: function () {
            this.toggleProperty('isExpanded');
        }
    },
    
    hasChildren: function(key, value) {
        var model = this.get('model');

        if (value === undefined) {
            var children = model.get('children');
            var childrenCount = model.get('children.length');
            return (children != null) && (childrenCount > 0);
        } else {
            // no setter.
        }

        return false;
    }.property('model.children'),

    isDisplay: function(key, value) {
        var model = this.get('model');
        
        if (value === undefined) {
            return model.get('isDisplay');
        } else {
            // the model property shouldn't be changed from the view directly.
        }
    }.property('model.isDisplay'),
    
    isExpanded: function(key, value) {
        var model = this.get('model');

        if (value === undefined) {
            return model.get('isShowChildren');
        } else {
            model.set('isShowChildren', value);
            
            // when value is true, we expand the node and show the children.
            // Otherwise, children are hidden.
            if (value) {
                var children = model.get('children');
                this._expandChildren(children);
            } else {
                this._collapseChildren(model.get('children'));
            }

            return value;
        }
    }.property('model.isShowChildren'),

    left_margin: function (key, value) {
        if (value != null) {
            return;
        }
        
        var isDisplay = this.get('isDisplay');
        if (isDisplay == null || !isDisplay) {
            return;
        }
    
        var model = this.get('model');
        var parent = model.get('parent');
        var margin = 0;
        while (parent != null) {
            margin += 8;
            parent = parent.get('parent');
        }
        var result = 'margin-left: ' + margin.toString() + 'px';
        return result;
    }.property('model.isDisplay'),
    
    _expandChildren: function (children, length) {
        children.forEach(function (item, index, enumerable) {
            item.set('isDisplay', true);
            
            var isExpanded = item.get('isShowChildren');
            if (isExpanded) {
                this._expandChildren(item.get('children'));
            }

        }.bind(this)
        );
    },
    
    _collapseChildren: function (children) {
        children.forEach(function (item, index, enumerable) {
            item.set('isDisplay', false);
            this._collapseChildren(item.get('children'));
        }.bind(this)
        );
    },
});