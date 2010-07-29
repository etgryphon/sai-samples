// ==========================================================================
// Project:   Sai Samples - ellipsePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.ellipsesPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['ellipse-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'rect1 ellipse1 center'.w(),
      backgroundColor: 'yellow',
      
      ellipse1: Sai.Ellipse.create({
        x: 232,
        y: 100,
        radiusX: 150,
        radiusY: 50,
        fill: 'lightblue',
        stroke: 'purple',
        strokeWidth: 10
      }),
      
      rect1: Sai.Rectangle.create({
        x: 82,
        y: 50,
        width: 300,
        height: 100,
        fill: 'lightblue',
        stroke: 'purple',
        strokeWidth: 1
      }),
      
      center: Sai.Circle.create({
        x: 232,
        y: 100,
        radius: 5,
        fill: 'black'
      })
    })
  })
});

