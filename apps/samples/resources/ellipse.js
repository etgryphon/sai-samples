// ==========================================================================
// Project:   Sai Samples - ellipsePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.ellipsePage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['ellipse-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'ellipse1 center'.w(),
      backgroundColor: 'yellow',
      
      ellipse1: Sai.Ellipse.create({
        x: 225,
        y: 100,
        radiusX: 150,
        radiusY: 50,
        fill: 'lightblue',
        stroke: 'purple',
        strokeWidth: 15
      }),
      
      center: Sai.Circle.create({
        x: 225,
        y: 100,
        radius: 5,
        fill: 'black'
      })
    })
  })
});

