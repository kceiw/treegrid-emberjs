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

        keyPress: function () {
            window.alert('hi');
        },
    },
});
