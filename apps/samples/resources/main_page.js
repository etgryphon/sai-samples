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
    childViews: 'label sampleTab'.w(),
    
    label: SC.LabelView.design({
      layout: { top: 10, centerX: 0, width: 1024, height: 18 },
      textAlign: SC.ALIGN_LEFT,
      tagName: "h1", 
      value: "Welcome to Sai Samples!"
    }),
    
    sampleTab: SC.TabView.design({
  		layout: { top: 30, centerX: 0, width: 1024, bottom: 30 },
      classNames: ['sample-tabs'],
      nowShowing: 'Samples.ellipsePage.mainView', 
      items: [
        { title: "Circles", value: 'Samples.circlePage.mainView' },
        { title: "Ellipses", value: 'Samples.ellipsePage.mainView' },
        { title: "Rectangles", value: 'Samples.rectanglePage.mainView' },
        { title: "Text", value: 'Samples.textPage.mainView' },
        { title: "Polygons", value: 'Samples.polygonPage.mainView' },
        { title: "Paths", value: 'Samples.pathPage.mainView' },
        { title: "Images", value: 'Samples.imagePage.mainView' }
      ],
      itemTitleKey: 'title',
      itemValueKey: 'value'
    })
  })
});
