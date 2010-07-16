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
    childViews: 'labelView test1 test2 test3'.w(),
    
    labelView: SC.LabelView.design({
      layout: { top: 10, centerX: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to Sai Samples!"
    }),
    
    test1: Samples.TestView.design({
      layerId: 'test-view',
      layout: { left: 50, right: 50, top: 40, height: 200 },
      backgroundColor: 'green'
    }),
    
    test2: Sai.CanvasView.design({
      layout: { left: 50, right: 50, top: 260, height: 200 },
      childElements: 'circle1 circle2'.w(),
      backgroundColor: 'pink',
      circle1: Sai.Circle.create({
        x: 10, 
        y: 10, 
        radius: 5
      }),
      
      circle2: Sai.Circle.create({
        x: 100,
        y: 100,
        radius: 15,
        fill: 'blue',
        stroke: 'yellow',
        strokeWidth: 5
      })
    }),
    
    test3: Sai.CanvasView.design({
      layout: { left: 50, right: 50, top: 480, height: 200 },
      childElements: 'ellipse1 center'.w(),
      backgroundColor: 'yellow',
      
      ellipse1: Sai.Ellipse.create({
        x: 500,
        y: 100,
        radiusX: 150,
        radiusY: 50,
        fill: 'lightblue',
        stroke: 'purple',
        strokeWidth: 15
      }),
      
      center: Sai.Circle.create({
        x: 500,
        y: 100,
        radius: 5,
        fill: 'black'
      })
    })
  })

});
