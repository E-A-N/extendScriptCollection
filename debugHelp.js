var getParent = function(prop){
    var result = prop;
    if (prop.propertyDepth > 0){
        result = getParent(prop.parentProperty);
    }
    
    return result;
}

var activeItem = app.project.activeItem;
if (activeItem !== null && activeItem instanceof CompItem){
  var select = activeItem.selectedProperties;
    if(select){
      var previous= -1;
      for(var i = 0 ; i < select.length ; i++){
        if(select[i].propertyValueType){
          if(getParentLayer(select[i]).index != previous){
            print("\n====================");
            print(getParentLayer(select[i]).name);
            print("====================");
            previous  = getParentLayer(select[i]).index;
          }
          print(select[i].name + ': ' + String(select[i].value));
        }
      }
    }
}
