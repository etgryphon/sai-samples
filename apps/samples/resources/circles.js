// ==========================================================================
// Project:   Sai Samples - circlePage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.circlesPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['circle-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic custom gradient'.w(),
    
    basic: Sai.CanvasView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
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
    
    gradient: Sai.CanvasView.design({
      layout: { left: 25, top: 240, height: 200, width: 465 },
      childElements: 'circle1'.w(),
      backgroundColor: 'green',
      circle1: Sai.Circle.create({
        x: 232, 
        y: 100, 
        radius: 50,
        fill: '90-#fff-#000'
      })
    }),
    
    custom: Samples.CircleView.design({
      layerId: 'test-view',
      layout: { left: 25, top: 460, height: 200, width: 465 },
      backgroundColor: 'green'
    }),
    
  })
});

