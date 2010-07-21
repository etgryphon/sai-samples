// ==========================================================================
// Project:   Sai Samples - imagePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai sc_static*/

// This page describes the main user interface for your application.  
Samples.imagePage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['image-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 210, width: 465 },
      childElements: 'img1'.w(),
      backgroundColor: 'red',
      
      img1: Sai.Image.create({
        x: 120,
        y: 5,
        height: 200,
        width: 200,
        image: sc_static('images/mac-penguin.jpg')
      })
    })
  })
});

