// ==========================================================================
// Project:   Sai Samples - polygonPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.polygonsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['polygon-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic basic1'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 236, width: 465 },
      childElements: 'example1'.w(),
      backgroundColor: 'yellow',
      
      example1: Sai.Polygon.create({
        points: [{x: 250, y: 5}, {x: 279, y: 91}, {x: 369, y: 91}, {x: 297, y: 145}, {x: 323, y: 231}, {x: 250, y: 180}, {x: 177, y: 231}, {x: 203, y: 145}, {x: 131, y: 91}, {x: 221, y: 91}],
        fill: 'lightblue',
        stroke: 'lightgreen',
        strokeWidth: 5
      })
    }),
    
    basic1: Sai.CanvasView.design({
      layout: { left: 25, top: 276, height: 236, width: 465 },
      childElements: 'example1'.w(),
      backgroundColor: 'yellow',
      
      example1: Sai.Polygon.create({
        points: '250,5 279,91 369,91 297,145 323,231 250,180 177,231 203,145 131,91 221,91',
        fill: 'red',
        stroke: 'purple',
        strokeWidth: 5
      })
    })
  })
});
