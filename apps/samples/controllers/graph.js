// ==========================================================================
// Samples.graphController
// ==========================================================================
/*globals Samples */
/** @static

  This ObjectController that serves up the data that is bindable
  
  @extends SC.ObjectController
  @author Evin Grano

*/

Samples.graphController = SC.ObjectController.create(
/** @scope Samples.graphController.prototype */ {
  content: '[[5, 10, 15, 12], [8, 9, 10, 45], [20, 30, 40, 5]]',
  number: 100, 
  dataArray: function(){
    var c = this.get('content'),
        dArray = [];
  
    if (SC.typeOf(c) === SC.T_STRING && c.length > 0){
      try {
        dArray = eval(c);
        dArray = SC.typeOf(dArray) === SC.T_ARRAY ? dArray : [];
      }
      catch(e){
        dArray = [];
      }
    }
    console.log('Content: %@ and Array: %@'.fmt(c, dArray));
    return dArray;
  }.property('content').cacheable(),
  
  bigDataArray: function(){
    var i, len = this.get('number'), rn, da = [];
    
    for (i = 0; i < len; i++){
      rn = Math.floor(Math.random()*101);
      da.push(rn);
    }
    
    return da;
  }.property('number').cacheable()
});
