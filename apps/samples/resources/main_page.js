// ==========================================================================
// Project:   Samples - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Samples Sai*/

// This page describes the main user interface for your application.  
Samples.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView test1 test2'.w(),
    
    labelView: SC.LabelView.design({
      layout: { top: 10, centerX: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to Sai Samples!"
    }),
    
    test1: Samples.TestView.design({
      layerId: 'test-view',
      layout: { centerX: 0, centerY: 0, width: 300, height: 300 },
      backgroundColor: 'green'
    }),
    
    test2: Sai.CanvasView.design({
      layout: { centerX: 0, centerY: 310, width: 200, height: 200 },
      childElements: 'circle1 circle2'.w(),
      
      circle1: Sai.Circle.create({
        x: 10, 
        y: 10, 
        radius: 5
      }),
      
      circle2: Sai.Circle.create({
        x: 100,
        y: 100,
        radius: 15
      })
    })
  })

});
