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
    childViews: 'labelView test1 test2 test3 test4 test5'.w(),
    
    labelView: SC.LabelView.design({
      layout: { top: 10, centerX: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to Sai Samples!"
    }),
    
    test1: Samples.TestView.design({
      layerId: 'test-view',
      layout: { centerX: -210, top: 40, height: 200, width: 400 },
      backgroundColor: 'green'
    }),
    
    test2: Sai.CanvasView.design({
      layout: { centerX: 210, top: 40, height: 200, width: 400 },
      childElements: 'circle1 circle2'.w(),
      backgroundColor: 'green',
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
      layout: { left: 50, right: 50, top: 260, height: 200 },
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
    }),
    
    test4: Sai.CanvasView.design({
      layout: { left: 50, right: 50, top: 480, height: 200 },
      childElements: 'rect1'.w(),
      backgroundColor: 'purple',
      
      rect1: Sai.Rectangle.create({
        x: 500,
        y: 100,
        height: 50,
        width: 150,
        fill: 'lightblue',
        stroke: 'lightgreen',
        strokeWidth: 15
      })
    }),
    
    test5: Sai.CanvasView.design({
      layout: { left: 50, right: 50, top: 700, height: 200 },
      childElements: 'text1'.w(),
      backgroundColor: 'red',
      
      text1: Sai.Text.create({
        x: 500,
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
