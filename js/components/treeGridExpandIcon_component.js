/**
 * @file Shows the expand/collapse icon. They're down and right arrows.
 * @author maoliang
 */

/**
 * Shows the expand/collapse icon and also response to click event.
 * The user who uses it should handle the action toggleExpansion.
 */
DemoApp.TreeGridExpandIconComponent = Ember.Component.extend({
    click: function() {
        this.sendAction();
   },
});

