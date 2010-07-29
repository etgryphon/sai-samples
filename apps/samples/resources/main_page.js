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
      nowShowing: 'Samples.graphsPage.mainView', 
      items: [
        { title: "Introduction", value: 'Samples.introPage.mainView' },
        { title: "Shapes", value: 'Samples.shapesPage.mainView' },
        { title: "Graphs", value: 'Samples.graphsPage.mainView' }
      ],
      itemTitleKey: 'title',
      itemValueKey: 'value'
    })
  })
});
