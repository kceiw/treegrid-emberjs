/**
 * @author maoliang
 */

DemoApp.TreeGridRowView = Ember.View.extend({
    init: function () {
        this._super();
        console.log('TreeGridRowView');
    },

    didInsertElement: function () {
        console.log('after insert TreeGridRowView');
    },

    templateName: 'treeGridRow',
    click: function (evt) {
        window.alert('go away');
    },

});
