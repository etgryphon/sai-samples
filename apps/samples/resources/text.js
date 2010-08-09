// ==========================================================================
// Project:   Sai Samples - textPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.textPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['circle-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      childElements: 'rect1 text1 rect2 text2 rect3 text3'.w(),
      backgroundColor: 'red',
      
      rect1: Sai.Rectangle.create({
        x: 10,
        y: 10,
        height: 50,
        width: 150,
        fill: 'white',
        stroke: 'black'
      }),
      
      text1: Sai.Text.create({
        x: 10,
        y: 10,
        height: 50,
        width: 150,
        text: 'Normal Just-Left',
        attrs: {
          textAnchor: 'left'
        },
        fill: 'black'
      }),
      
      rect2: Sai.Rectangle.create({
        x: 175,
        y: 10,
        height: 50,
        width: 150,
        fill: 'white',
        stroke: 'black'
      }),
      
      text2: Sai.Text.create({
        x: 175,
        y: 10,
        height: 50,
        width: 150,
        text: 'Normal Just-Right',
        attrs: {
          textAnchor: 'right'
        },
        fill: 'black'
      }),
      
      rect3: Sai.Rectangle.create({
        x: 10,
        y: 85,
        height: 50,
        width: 150,
        fill: 'white',
        stroke: 'black'
      }),
      
      text3: Sai.Text.create({
        x: 10,
        y: 85,
        height: 50,
        width: 150,
        text: 'Normal Just-Center',
        attrs: {
          textAnchor: 'center'
        },
        fill: 'black'
      })
    })
  })
});

