treegrid-emberjs
================

This implements a tree-like grid in Ember.js.Each node of the tree is at a row of the grid. The node can be expanded/collapsed.
The collapsed nodes won't be shown in the grid.

There's one-to-one mapping between grid row and tree node. Each grid row shows data in each tree node. There's 
parent-child relantionship of rows in the grid too. It reflects the same relationship of the tree. This relationship is
indicated by indentation.

The way to convert a tree to a grid is to traverse the tree in preorder way and get the output into a grid.
So for example the tree:
                      1
                     / \
                    2   3
                   /     \
                  4       5
                  
The grid will look like
-------------
| 1         |
-------------
|   2       |
-------------
|     4     |
-------------
|   3       |
-------------
|     5     |
-------------

Note that how the indentation tells the parent-child relationship.

It's also possible to expand/collapse the children of a given node. e.g. If you want to collapse 2, 4 will be hidden.
