// ==========================================================================
// Project:   Sai Samples - rectanglePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.rectanglePage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['circle-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'rect1'.w(),
      backgroundColor: 'yellow',
      
      rect1: Sai.Rectangle.create({
        x: 155,
        y: 100,
        height: 50,
        width: 150,
        fill: 'lightblue',
        stroke: 'lightgreen',
        strokeWidth: 3
      })
    })
  })
});

