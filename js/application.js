/**
 * @author maoliang
 */

window.DemoApp= Ember.Application.create({
    LOG_VIEW_LOOKUPS: true,
});

Ember.LOG_BINDINGS = true;

DemoApp.TreeGridColumnModel = TreeGrid.ColumnModel;
DemoApp.TreeGridRowModel = TreeGrid.RowModel;
DemoApp.TreeGridColumnController = TreeGrid.ColumnController;
DemoApp.TreeGridExpandIconComponent = TreeGrid.ExpandIconComponent;
DemoApp.TreeGridRowComponent = TreeGrid.RowComponent;
DemoApp.TreeGridComponent = TreeGrid.TreeGridComponent;

DemoApp.ApplicationAdapter = DS.FixtureAdapter.extend();

DemoApp.TreeGridColumnModel.FIXTURES = [
                                   {
                                       id: 1,
                                       title: 'name',
                                       width: '10%',
                                   },
                                   {
                                       id: 2,
                                       title: 'detail',
                                       width: '90%',
                                   }
                                   ];

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
DemoApp.TreeGridRowModel.FIXTURES = [
                                       {
                                           id: 1,
                                           name: 'node 1',
                                           detail: 'detail 1',
                                           children: [ 2, 7, 9 ],
                                           // children: [ 2 ],
                                           parent: null,
                                           isShowChildren: false,
                                           isShown: true,
                                       },
                                       {
                                           id: 2,
                                           name: 'node 2',
                                           detail: 'detail 2',
                                           children: [ 3, 6 ],
                                           // children: [ 3 ],
                                           parent: 1,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 3,
                                           name: 'node 3',
                                           detail: 'detail 3',
                                           children: [ 4, 5 ],
                                           // children: [ ],
                                           parent: 2,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 4,
                                           name: 'node 4',
                                           detail: 'detail 4',
                                           children: [],
                                           parent: 3,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 5,
                                           name: 'node 5',
                                           detail: 'detail 5',
                                           children: [ ],
                                           parent: 3,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 6,
                                           name: 'node 6',
                                           detail: 'detail 6',
                                           children: [ ],
                                           parent: 2,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 7,
                                           name: 'node 7',
                                           detail: 'detail 7',
                                           children: [ 8 ],
                                           parent: 1,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 8,
                                           name: 'node 8',
                                           detail: 'detail 8',
                                           children: [],
                                           parent: 7,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 9,
                                           name: 'node 9',
                                           detail: 'detail 9',
                                           children: [ 10 ],
                                           parent: 1,
                                           isShowChildren: false,
                                           isShown: false,
                                       },
                                       {
                                           id: 10,
                                           name: 'node 10',
                                           detail: 'detail 10',
                                           children: [],
                                           parent: 9,
                                           isShowChildren: false,
                                           isShown: false,
                                       }
                                       ]
;                                      
