/**
 * @author maoliang
 */

DemoApp.TreeGridRowsView = Ember.CollectionView.extend({
    init: function () {
        this._super();
        console.log('TreeGridRowsView');
    },
    
    didInsertElement: function () {
        console.log('after insert TreeGridRowViews');
    },
    
    itemViewClass: DemoApp.TreeGridRowView,
    content: Ember.computed.alias('controller'),
});