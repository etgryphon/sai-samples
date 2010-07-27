// ==========================================================================
// Project:   Sai Samples - pathPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.pathPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['path-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'line triangle curve complex'.w(),
    //childViews: 'line'.w(),
    
    line: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'line1 line2'.w(),
      backgroundColor: 'lightblue',
      line1: Sai.Path.create({
        stroke: 'green',
        strokeWidth: 5,
        path: 'M10,10 L300,100'
      }),
      
      line2: Sai.Path.create({
        stroke: 'red',
        strokeWidth: 5,
        path: 'M10,190 l290,-90'
      })
    }),
    
    triangle: Sai.CanvasView.design({
      layout: { right: 25, top: 20, height: 200, width: 465 },
      childElements: 'path'.w(),
      backgroundColor: 'red',
      path: Sai.Path.create({
        fill: 'lightblue',
        stroke: 'lightgreen',
        strokeWidth: 5,
        path: 'M50,10 L250,10 150,185 z'
      })
    }),
    
    curve: Sai.CanvasView.design({
      layout: { left: 25, top: 230, height: 200, width: 465 },
      childElements: 'path'.w(),
      backgroundColor: 'blue',
      path: Sai.Path.create({
        stroke: 'red',
        strokeWidth: 5,
        path: 'M100,140 c100,-10 90,-100 200,0'
      })
    }),
    
    complex: Sai.CanvasView.design({
      layout: { right: 25, top: 230, height: 200, width: 465 },
      childElements: 'path1 path2'.w(),
      backgroundColor: 'yellow',
      path1: Sai.Path.create({
        stroke: 'green',
        fill: 'lightgreen',
        strokeWidth: 5,
        path: 'M40,140 L40,100 10,100 C10,10 90,10 90,100 L60,100 60,140 Z'
      }),
      path2: Sai.Path.create({
        stroke: 'green',
        fill: 'lightgreen',
        strokeWidth: 5,
        path: 'M140,50 C70,180 195,180 190,100'
      })
    })
  })
});

