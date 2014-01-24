/**
 * @author maoliang
 */

DemoApp.TreeGridColumn = DS.Model.extend({
    
});

DemoApp.TreeGridModel = DS.Model.extend({
    name: DS.attr('string'),
    detail: DS.attr('string'),
    children: DS.hasMany('TreeGridModel', {
        inverse: 'parent'
    }),
    parent: DS.belongsTo('TreeGridModel'),
    isShowChildren: DS.attr('boolean', { defaultValue: false }),
    isDisplay: DS.attr('boolean', { defaultValue: false }),
});

/**
 * 1
 * |- 2
 * |  |- 3
 *       |- 4
 *       |- 5
 * |  |- 6
 * |- 7  
 *    |- 8
 * |- 9
 *    |- 10
 */
DemoApp.TreeGridModel.FIXTURES = [
                                       {
                                           id: 1,
                                           name: 'node 1',
                                           detail: 'detail 1',
                                           //children: [ 2, 7, 9 ],
                                           children: [ 2 ],
                                           parent: null,
                                           isShowChildren: false,
                                           isDisplay: true,
                                       },
                                       {
                                           id: 2,
                                           name: 'node 2',
                                           detail: 'detail 2',
                                           // children: [ 3, 6 ],
                                           children: [ 3 ],
                                           parent: 1,
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 3,
                                           name: 'node 3',
                                           detail: 'detail 3',
                                           // children: [ 4, 5 ],
                                           children: [ ],
                                           parent: 2,
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       /*
                                       {
                                           id: 4,
                                           name: 'node 4',
                                           detail: 'detail 4',
                                           children: [],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 5,
                                           name: 'node 5',
                                           detail: 'detail 5',
                                           children: [ ],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 6,
                                           name: 'node 6',
                                           detail: 'detail 6',
                                           children: [ ],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 7,
                                           name: 'node 7',
                                           detail: 'detail 7',
                                           children: [ 8 ],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 8,
                                           name: 'node 8',
                                           detail: 'detail 8',
                                           children: [],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 9,
                                           name: 'node 9',
                                           detail: 'detail 9',
                                           children: [ 10 ],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       },
                                       {
                                           id: 10,
                                           name: 'node 10',
                                           detail: 'detail 10',
                                           children: [],
                                           isShowChildren: false,
                                           isDisplay: false,
                                       }
                                       */
                                       ];