/**
 * @author maoliang
 */

DemoApp.TreeGridComponent = Ember.Component.extend({
    selectedRow: null,
    actions: {
        selected: function (newSelectedRow) {
              if (this.selectedRow === newSelectedRow) {
                return;
            }
            
            if (this.selectedRow != null) {
                this.selectedRow.set('isSelected', false);
            }
            
            this.selectedRow = newSelectedRow;
            this.selectedRow.set('isSelected', true);
        },

        toggleRowChildren: function (row) {
            row.toggleProperty('isShowChildren');
            var value = row.get('isShowChildren');

            if (value) {
                var children = row.get('children');
                this._expandChildren(children);
            } else {
                this._collapseChildren(row.get('children'));
            }
        },
        
        keyPress: function () {
            window.alert('hi');
        },
    },

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
