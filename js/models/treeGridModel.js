/**
 * @file Defines view column view model and row view model for the table.
 * @author maoliang
 */

/**
 * Defines view model for each column.
 *
 * The columns for the the grid will be an array of this view model.
 */
DemoApp.TreeGridColumnModel = DS.Model.extend({
    /**
     * The name shown in the column header.
     */
    title: DS.attr('string'),

    /**
     * The width of the column. It can be in the form of 'px' or percent 
     * '%'.
     */
    width: DS.attr('string'),
});

/**
 * Defines view model for each row. Each row represents a node in the 
 * tree.
 * An array of such view model is a tree representation in preorder.
 * The parent-children relation is reflected in the fields children and 
 * parent.
 * e.g. a tree
 * 1
 * |- 2
 * |  |- 3
 * |  |  |- 4
 * |  |
 * |  |- 5
 * |
 * |- 6
 *
 * the array should be [1, 2, 3, 4, 5, 6]
 *
 * Assuming there are only two columns in the grid.
 */
DemoApp.TreeGridRowModel = DS.Model.extend({
    /**
     * The value for the column name.
     */
    name: DS.attr('string'),

    /**
     * The value for the column detail.
     */
    detail: DS.attr('string'),

    /**
     * The children of this node.
     */
    children: DS.hasMany('TreeGridRowModel', {
        inverse: 'parent'
    }),

    /**
     * The parent of this node.
     */
    parent: DS.belongsTo('TreeGridRowModel'),

    /**
     * Determine whether the children should be shown.
     */
    isShowChildren: DS.attr('boolean', { defaultValue: false }),

    /**
     * Determine whether this node should be shown.
     */
    isShown: DS.attr('boolean', { defaultValue: false }),

    /**
     * whether this node is selected.
     */
    isSelected: DS.attr('boolean', { defaultValue: false }),
});
