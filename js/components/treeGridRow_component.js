/**
 * @author maoliang
 */

DemoApp.TreeGridRowComponent = Ember.Component.extend({
    init: function () {
        this._super();
        console.log('TreeGRidRowComponent');
    },

    actions: {
        toggleExpansion: function () {
            var row = this.get('row');
            this.sendAction('action', row);
        },

        select: function () {
            //window.alert("select row.");
        },
    },
    
    hasChildren: function (key, value) {
        var row = this.get('row');

        if (value === undefined) {
            var children = row.get('children');
            var childrenCount = row.get('children.length');
            return (children != null) && (childrenCount > 0);
        } else {
            // no setter.
        }

        return false;
    }.property('row.children'),

    isShown: function (key, value) {
        var row = this.get('row');
        
        if (value === undefined) {
            return row.get('isShown');
        } else {
            // the row property shouldn't be changed from the view directly.
        }
    }.property('row.isShown'),
    
    isSelected: function (key, value) {
        var row = this.get('row');
        
        if (value === undefined) {
            return row.get('isSelected');
        } else {
            // no setter.
        }
    }.property('row.isSelected'),
    
    isExpanded: function (key, value) {
        var row = this.get('row');

        if (value === undefined) {
            return row.get('isShowChildren');
        } else {
            return value;
        }
    }.property('row.isShowChildren'),

    left_margin: function (key, value) {
        if (value != null) {
            return;
        }
        
        var isShown = this.get('isShown');
        if (isShown == null || !isShown) {
            return;
        }
    
        var row = this.get('row');
        var parent = row.get('parent');
        var margin = 0;
        while (parent != null) {
            margin += 8;
            parent = parent.get('parent');
        }
        var result = 'margin-left: ' + margin.toString() + 'px';
        return result;
    }.property('row.isShown'),
    
    _expandChildren: function (children) {
        children.forEach(function (item, index, enumerable) {
            item.set('isShown', true);
            
            var isExpanded = item.get('isShowChildren');
            if (isExpanded) {
                this._expandChildren(item.get('children'));
            }

        }.bind(this)
        );
    },
    
    _collapseChildren: function (children) {
        children.forEach(function (item, index, enumerable) {
            item.set('isShown', false);
            this._collapseChildren(item.get('children'));
        }.bind(this)
        );
    },
});
