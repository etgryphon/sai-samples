// ==========================================================================
// Project:   Sai Samples - barGraphsPage
// Copyright: ©2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples Sai*/
// This page describes the main user interface for your application.  
Samples.pieChartPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['piechart-sample'],
    layout: { top: 0, left: 0, right: 0, bottom: 0 },
    childViews: 'east west'.w(),
    
    east: Sai.PieChartView.design({
      layout: { left: 25, top: 0, height: 300, width: 400 },
      backgroundColor: 'pink',
      data: [5, 10, 87, 15, 56],
//      data: [5],
      dataAttrs: {
        colors: ['green', 'blue', '#F8A377'],
        radius: 100,
        padding: 20,
        showValues: YES
      },
      legend: {
        color: 'black',
        buffer: 0.15,
        pos: 'east',
        fontSize: '9',
        labels: ['Early', 'Morning', 'Afternoon', 'Evening', 'Night']
      }
    }),

    west: Sai.PieChartView.design({
      layout: { left: 429, top: 0, height: 300, width: 400 },
      backgroundColor: '#3D9AD1',
      data: [5, 10, 87, 15, 56],
//      data: [5],
      dataAttrs: {
        radius: 100,
        padding: 20
      },
      legend: {
        color: 'black',
        buffer: 0.15,
        pos: 'west',
        fontSize: '9',
        labels: ['Early', 'Morning', 'Afternoon']
      }
    })
  })
});

