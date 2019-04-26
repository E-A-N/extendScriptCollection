var getParent = function(prop){
    var result = prop;
    if (prop.propertyDepth > 0){
        result = getParent(prop.parentProperty);
    }
    
    return result;
}

var activeItem = app.project.activeItem;
if (activeItem !== null && activeItem instanceof CompItem){
  var sel = activeItem.selectedProperties;
    if(sel){
      var prevLayerIndex = -1;
      for(var i = 0 ; i < sel.length ; i++){
        if(sel[i].propertyValueType){
          if(getParentLayer(sel[i]).index != prevLayerIndex){
            $.writeln("\n====================");
            $.writeln(getParentLayer(sel[i]).name);
            $.writeln("====================");
            prevLayerIndex = getParentLayer(sel[i]).index;
          }
          $.writeln(sel[i].name + ': ' + String(sel[i].value));
        }
      }
    }
}
