/**
 * @fileoverview
 * @author maoliang
 */

/**
 * @extends {Ember.Component}
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

    /**
     * @private
     */
    keyPress: function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
        case this.KEYCODE_UP_ARROW:
            this.selectPreviousVisibleRow();
            break;
        case this.KEYCODE_DOWN_ARROW: 
            this.selectNextVisibleRow();
            break;
        case this.KEYCODE_SPACE:
            this.toggleExpandState();
            break;
        default:
            break;
        }
    },

    /**
     * @private
     */
    setFocus: function () {
        // brings the view into focus in order to capture keyboard events.
        return this.$().attr({ tabindex: 1 }), this.$().focus();
    }.on('didInsertElement'),

    toggleExpandState: function () {
        if (this.selectedRow == null) {
            return;
        }

        var childrenCount = this.selectedRow.get('children.length');
        if (childrenCount !== 0) {
            this.selectedRow.toggleProperty('isShowChildren');
        }
    },

    /**
     * Select a row that is visibly one row above the currently selected one.
     * If there is not currently selected one, the first visible row will be 
     * selected.
     * @private
     */
    selectPreviousVisibleRow: function () {
        if (this.selectedRow == null) {
            var rows = this.get('rows');
            var rowsLength = row.get('length');
            if (rows != null && rowslength > 0) {
                this.selectedRow = rows.objectAt(0);
                this.selectedRow.set('isSelected', true);
            }
        } else {
            var previousRow = this.getPreviousVisibleRow(this.selectedRow);

            if (previousRow != null) {
                this.selectedRow.set('isSelected', false);
                previousRow.set('isSelected', true);
                this.selectedRow = previousRow;
            }
        }
    },

    /**
     * Find the visible row that is just above row.
     * @private
     * @param {TreeGridRowModel} row The row from where to get the previous row
     * @return {TreeGridRowModel} The previous visible row.
     */
    getPreviousVisibleRow: function (row) {
        if (row == null) {
            return null;
        }

        var parentNode = row.get('parent');

        if (parentNode == null) {
            return null;
        }

        var children = parentNode.get('children');
        var childrenCount = children.get('length');
        var index = children.indexOf(this.selectedRow);
        if (index === 0) {
            return parentNode;
        } else if (index > 0 && index < childrenCount) {
            var previousSibling = children.objectAt(index - 1);

            if (previousSibling == null) {
                console.error('previous sibling should not be null');
                return null;
            }

            return this.getLastVisibleDescendent(previousSibling);
        } else if (index === -1) {
            console.error('Oop, the row isn\'t found.');
        } else {
            console.error('index is out of range.');
        }

        return null;
    },

    /**
     * Get the last visible descendent of row or itself.
     * If row's isShowChildren is false or it doesn't have children,
     * itself will be returned.
     * If row's isShowChildren is true, it will find the last children,
     * and return the last visible descendent of that child.
     * @private
     * @param {TreeGridRowViewModel} row The row whose desendent to look for
     * @return {TreeGridRowViewModel}
     */
    getLastVisibleDescendent: function (row) {
        if (row == null) {
            return null;
        }

        var isShowChildren = row.get('isShowChildren');
        var children = row.get('children');
        var childrenCount = children.get('length');

        if (!isShowChildren || childrenCount === 0) {
            return row;
        } else {
            var lastChild = children.get('lastObject');
            if (lastChild == null) {
                console.error('last object should not be null.');
                return null;
            } else {
                return this.getLastVisibleDescendent(lastChild);
            }
        }
    },

    /**
     * Select a row that is visibly one row below the currently selected one.
     * If there is not currently selected one, the first visible row will be 
     * selected.
     * @private
     */
    selectNextVisibleRow: function () {
        if (this.selectedRow == null) {
            var rows = this.get('rows');
            if (rows != null && rows.length > 0) {
                this.selectedRow = rows.objectAt(0);
                this.selectedRow.set('isSelected', true);
            }
        } else {
            var nextVisibleRow = this.getNextVisibleRow(this.selectedRow);

            if (nextVisibleRow != null) {
                this.selectedRow.set('isSelected', false);
                nextVisibleRow.set('isSelected', true);
                this.selectedRow = nextVisibleRow;
            }
        }
    },

    /**
     * Find the visible row that is just below row.
     * @private
     * @param {TreeGridRowViewModel} row
     * @return {TreeGridRowViewModel}
     */
    getNextVisibleRow: function (row) {
        if (row == null) {
            return null;
        }

        var isShowChildren = row.get('isShowChildren');
        var children = row.get('children');
        var childrenCount = children.get('length');

        if (isShowChildren && childrenCount > 0) {
            // return the first child.
            var firstChild = children.get('firstObject');

            if (firstChild == null) {
                console.error('first child should not be null.');
                return null;
            }

            return firstChild;
        } else {
            return this.getNextSiblingRow(row);
        }
    },

    /**
     * Get the next visible row in sibling level. If row is the last child of 
     * its parent, then get the next visible sibling row of its parent.
     * @private
     * @param {TreeGridRowViewModel} row
     * @return {TreeGridRowViewModel}
     */
    getNextSiblingRow: function (row) {
        if (row == null) {
            return null;
        }

        // first try to get next sibling.
        var parentNode = row.get('parent');

        if (parentNode == null) {
            return null;
        }

        var children = parentNode.get('children');
        var index = children.indexOf(row);
        var siblingCount = children.get('length');

        if (index >= 0 && index + 1 < siblingCount) {
            var nextSibling = children.objectAt(index + 1);

            if (nextSibling == null) {
                console.error('next sibling shouldn\'t be null.');
                return null;
            }

            return nextSibling;
        } else if (index + 1 === siblingCount) {
            return this.getNextSiblingRow(parentNode);
        } else if (index === -1) {
            console.error('Oops, the object is not in the array.');
        } else {
            console.error('index is out of range.');
        }

        return null;
    },
    
    /**
     * @private {TreeGridRowModel}
     */
    selectedRow: null,

    /**
     * The key code for up arrow.
     * @private
     * @const {int}
     */
    KEYCODE_UP_ARROW: 38,

    /**
     * The key code for down arrow.
     * @private
     * @const {int}
     */
    KEYCODE_DOWN_ARROW: 40,

    /**
     * The key code space.
     * @parivate
     * @const {int}
     */
    KEYCODE_SPACE: 0,
});
