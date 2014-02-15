/**
 * @file Shows the expand/collapse icon. They're down and right arrows.
 * @author maoliang
 */

var TreeGrid = (function (module) {
    /**
     * Shows the expand/collapse icon and also response to click event.
     * The user who uses it should handle the action toggleExpansion.
     */
    module.ExpandIconComponent = Ember.Component.extend({
        click: function() {
            this.sendAction();
       },
    });

    return module;
})(TreeGrid || {});
