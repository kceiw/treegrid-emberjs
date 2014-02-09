/**
 * @author maoliang
 */

DemoApp.TreeGridComponent = Ember.Component.extend({
	tagName: 'div',
	
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
    },
    
    setFocus: function() {
        // brings the view into focus in order to capture keyboard events.
        return this.$().attr({ tabindex: 1 }), this.$().focus();
    }.on('didInsertElement'),
    
    selectedRow: null,
});
