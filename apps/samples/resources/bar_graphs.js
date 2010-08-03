// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
sc_require('views/circle');
// This page describes the main user interface for your application.  
Samples.barGraphsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['bargraph-sample'],
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: 'basic multi stacked'.w(),    
    
    basic: Sai.BarChartView.design({
      layout: { left: 25, top: 20, height: 300, width: 300 },
      backgroundColor: 'pink',
      data: [5, 10, 87, 15, 56],
      dataAttrs: {barWidth: 25, color: 'green'},
      grid: {color: 'lightgrey'},
      yaxis: {step: 5, weight: 1, color: 'black'},
      xaxis: {color: 'black', labels: ['Morning', 'Afternoon', 'Evening']}
    }),
    
    multi: Sai.BarChartView.design({
      layout: { left: 345, top: 20, height: 300, width: 300 },
      backgroundColor: 'yellow',
      data: [[5, 10, 15], [8, 9, 10], [20, 30, 40]],
      dataAttrs: {barWidth: 10, barSpacing: 5, colors: ['red', 'green', 'blue']},
      grid: {color: 'lightgrey'},
      yaxis: {step: 5, weight: 1, color: 'black'},
      xaxis: {color: 'black', labels: ['Morning', 'Afternoon', 'Evening']}
    }),
    
    stacked: Sai.BarChartView.design({
      layout: { left: 25, top: 340, height: 300, width: 300 },
      backgroundColor: 'lightgreen',
      data: [[5, 10, 15], [8, 9, 10], [20, 30, 40]],
      dataAttrs: {stacked: true, barWidth: 20, colors: ['red', 'green', 'blue']},
      grid: {color: 'lightgrey'},
      yaxis: {step: 5, weight: 1, color: 'black'},
      xaxis: {color: 'black', labels: ['Morning', 'Afternoon', 'Evening']}
    })
  })
});

