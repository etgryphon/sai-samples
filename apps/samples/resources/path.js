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
    childViews: 'triangle curves dimTest'.w(),
    
    triangle: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'path1 path2'.w(),
      backgroundColor: 'red',
      path1: Sai.Path.create({
        fill: 'lightblue',
        stroke: 'lightgreen',
        strokeWidth: 5,
        path: 'M50,10 L250,10 150,185 z'
      }),
      
      path2: Sai.Path.create({
        stroke: 'black',
        strokeWidth: 5,
        path: 'M50,10C50,10,250,10,250,10C250,10,150,185,150,185C150,185,50,10,50,10'
      })
    }),
    
    curves: Sai.CanvasView.design({
      layout: { right: 25, top: 20, height: 200, width: 465 },
      childElements: 'path1 path2'.w(),
      backgroundColor: 'yellow',
      path1: Sai.Path.create({
        stroke: 'green',
        fill: 'lightgreen',
        strokeWidth: 5,
        path: 'M40,140 L40,100 10,100 C10,10 90,10 90,100 L60,100 60,140 M140,50 C70,180 195,180 190,100'
      }),
      path2: Sai.Path.create({
        stroke: 'black',
        strokeWidth: 5,
        path: 'M100,140C40,140,40,100,40,100C40,100,10,100,10,100C10,10,90,10,90,100C90,100,60,100,60,100C60,100,60,140,60,140M140,50C70,180,195,180,190,100'
      })
    }),
    
    dimTest: Sai.CanvasView.design({
      layout: { left: 25, top: 230, height: 200, width: 465 },
      childElements: 'path1 max min'.w(),
      backgroundColor: 'blue',
      path1: Sai.Path.create({
        stroke: 'red',
        strokeWidth: 5,
        path: 'M100,140 c100,-10 90,-100 200,0'
      }),
      max: Sai.Circle.create({
        x: 300,
        y: 140,
        radius: 3,
        fill: 'black'
      }),
      min: Sai.Circle.create({
        x: 100,
        y: 93,
        radius: 3,
        fill: 'black'
      })
    })
  })
});

