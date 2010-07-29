// ==========================================================================
// Samples.basicSourceController
// ==========================================================================
/*globals Samples */
/** @static

  This ArrayController that serves up the SourceList to the Shape Library
  
  @extends SC.ArrayController
  @author Evin Grano

*/

Samples.basicSourceController = SC.ArrayController.create(
/** @scope Samples.mixinSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: "Circles", view: 'Samples.circlesPage.mainView'}),
      SC.Object.create({ name: "Ellipses", view: 'Samples.ellipsesPage.mainView'}),
      SC.Object.create({ name: "Rectangles", view: 'Samples.rectanglesPage.mainView'}),
      SC.Object.create({ name: "Text", view: 'Samples.textPage.mainView'}),
      SC.Object.create({ name: "Polygons", view: 'Samples.polygonsPage.mainView'}),
      SC.Object.create({ name: "Paths", view: 'Samples.pathsPage.mainView'}),
      SC.Object.create({ name: "Images", view: 'Samples.imagesPage.mainView'})
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[0]) );
  },
  
  shapeSelected: function(){
    var sel = this.getPath('selection.firstObject');
    if (sel) {
      var scene = Samples.shapesPage.getPath('mainView.detail');
      var view = sel.get('view');
      scene.set('nowShowing', view);
    } 
    else {
      console.log('There is no selection...');
    }
    
  }
  
});
