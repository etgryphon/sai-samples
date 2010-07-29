// ==========================================================================
// Project:   Sai Samples - textPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.lineGraphsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['linegraph-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'basic'.w(),    
    
    basic: Sai.LineChartView.design({
      layout: { left: 25, top: 20, height: 200, width: 465 },
      backgroundColor: '#FFF',
      data: [[[1,10], [10,25], [30,50], [50,100]], [[5,10], [15,25], [25,50], [75,100]]],
      dataAttrs: [{stroke: 'red', strokeWidth: 1}, {stroke: 'green', strokeWidth: 2}],
      grid: {color: 'lightgrey'},
      yaxis: {min: 0, max: 100, step: 10, weight: 1, color: 'black'},
      xaxis: {min: 0, max: 100, step: 10, weight: 1, color: 'black'}
    })
  })
});

