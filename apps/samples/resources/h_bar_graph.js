// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.hBarGraphsPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['bargraph-sample'],
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: 'basic multi stacked stackedInput big bigInput'.w(),
    
    basic: Sai.BarChartView.design({
      layout: { left: 25, top: 0, height: 300, width: 400 },
      backgroundColor: 'pink',
      data: [5, 10, 87, 15, 56],
      dataAttrs: {horizontal: YES, barWidth: 25, color: 'green'},
      grid: {color: 'lightgrey'},
      yaxis: {color: 'black', buffer: 0.15, labelAttrs: {offset: -5, fontSize: '9'}, labels: ['Early', 'Morning', 'Afternoon', 'Evening', 'Night']},
      xaxis: {color: 'black', step: 5, buffer: 0.1, labels: YES, weight: 1}
    }),
    
    multi: Sai.BarChartView.design({
      layout: { left: 435, top: 0, height: 300, width: 400 },
      backgroundColor: 'yellow',
      //data: [[5, 30], [8, 10], [20, 6]],
      //data: [[5, 10, 15], [8, 9, 10], [20, 30, 40]],
      data: [[5, 10, 15, 5], [8, 9, 10, 12], [20, 30, 40, 10]],
      dataAttrs: {horizontal: YES, barWidth: 10, barSpacing: 2, colors: ['red', 'green', 'blue', 'purple']},
      grid: {color: 'lightgrey'},
      yaxis: {color: 'black', buffer: 0.2, labelAttrs: {offset: -5}, labels: ['Morning', 'Afternoon', 'Night']},
      xaxis: {color: 'black', step: 5, buffer: 0.1, weight: 1, labels: ['0', '5', '10', '15', '20', '25', '30', '35', '45']}
    }),
    
    stacked: Sai.BarChartView.design({
      layout: { left: 25, top: 320, height: 300, width: 400 },
      backgroundColor: 'lightgreen',
      dataBinding: 'Samples.graphController.dataArray',
      dataAttrs: {horizontal: YES, stacked: YES, barWidth: 20, colors: ['red', 'green', 'blue', 'purple']},
      grid: {color: 'lightgrey'},
      yaxis: {color: 'black', buffer: 0.15, labelAttrs: {offset: -5, fontSize: '9'}, labels: ['Early', 'Morning', 'Afternoon']},
      xaxis: {color: 'black', hidden: NO, step: 5, buffer: 0.1, weight: 1, labels: {'5': 'blue', '50': 'red'}}
    }),
    
    stackedInput: SC.TextFieldView.design({
      layout: { left: 25, top: 640, height: 22, width: 300 },
      valueBinding: 'Samples.graphController.content'
    }),
    
    big: Sai.BarChartView.design({
      layout: { left: 435, top: 320, height: 300, width: 400 },
      backgroundColor: 'lightgreen',
      dataBinding: 'Samples.graphController.bigDataArray',
      dataAttrs: {horizontal: YES, barWidth: 1, color: 'red'},
      grid: {color: 'lightgrey'},
      yaxis: {color: 'black', buffer: 0.15},
      xaxis: {color: 'black', hidden: NO, step: 10, buffer: 0.1, weight: 1}
    }),
    
    bigInput: SC.TextFieldView.design({
      layout: { left: 435, top: 640, height: 22, width: 50 },
      valueBinding: 'Samples.graphController.number'
    })
  })
});

