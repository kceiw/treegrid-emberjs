/**
 * @file Shows individual row in a grid control.
 * @author maoliang
 */

/**
 * Shows individual row in a grid control.
 * @extends {Ember.Component}
 */
DemoApp.TreeGridRowComponent = Ember.Component.extend({
    tagName: 'tr',
    classNameBindings: ['isShown:grid-row:grid-row-hide', 'isSelected:grid-row-selected'],

    actions: {
        // It handles the action from TreeGridExpandIconComponent.
        toggleExpansion: function () {
            var row = this.get('row');
            row.toggleProperty('isShowChildren');
        },
    },

    click: function () {
        var row = this.get('row');
        // send the action selected.
        this.sendAction('action', row);
    },
    
    hasChildren: function (key, value) {
        var row = this.get('row');

        if (value === undefined) {
            var childrenCount = row.get('children.length');
            return (childrenCount > 0);
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
    
    /**
     * Whether the row is in expanded or collapsed state.
     * It's in expanded state only when the property isShownChildren is 
     * true. It's in collapsed state otherwise.
     */
    isExpanded: function (key, value) {
        var row = this.get('row');

        if (value === undefined) {
            return row.get('isShowChildren');
        } else {
            return value;
        }
    }.property('row.isShowChildren'),

    /**
     * Calculate the indentation of the row so that the grid look like a 
     * tree.
     */
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
            margin += 10;
            parent = parent.get('parent');
        }
        var result = 'margin-left: ' + margin.toString() + 'px';
        return result;
    }.property('row.isShown'),

    /**
     * Observes the property isShowChildren of the row and determine the 
     * properties isShown of the its children.
     */
    isShowChildrenChanged: function () {
        var row = this.get('row');
        var value = row.get('isShowChildren');

        if (value) {
            var children = row.get('children');
            this._expandRows(children);
        } else {
            this._collapseRows(row.get('children'));
        }
    }.observes('row.isShowChildren').on('init'),
    
    /**
     * Shows rows and their descendents.
     * The descendents are to be shown only when their parents' 
     * isShowChildren properties are true.
     *
     * @param {TreeGrid.RowModel} rows The rows and their descendents to show.
     */
    _expandRows: function (rows) {
        rows.forEach(function (item, index, enumerable) {
            item.set('isShown', true);
            
            var isExpanded = item.get('isShowChildren');
            if (isExpanded) {
                this._expandRows(item.get('children'));
            }

        }.bind(this)
        );
    },
    
    /**
     * Hide rows and their descendents.
     *
     * @param {TreeGrid.RowModel} rows The nodes and their descendents 
     *                                     to be hidden
     */
    _collapseRows: function (rows) {
        rows.forEach(function (item, index, enumerable) {
            item.set('isShown', false);
            this._collapseRows(item.get('children'));
        }.bind(this)
        );
    },
});

