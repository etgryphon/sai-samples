// ==========================================================================
// Project:   Sai Samples - imagePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/

// This page describes the main user interface for your application.  
Samples.imagePage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['image-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'img1'.w(),
      backgroundColor: 'red',
      
      img1: Sai.Text.create({
        x: 155,
        y: 100,
        height: 50,
        width: 150,
        text: 'This is my text',
        fill: 'lightblue',
        stroke: 'lightgreen'
      })
    })
  })
});

