var frosty = ["frosty", "pookie", "eddie", "eddy1!!"];

var printList = function(list) {
    // list.forEach(function(item){
    //     alert("item is:", item);
    // });

    for (item in list){
        writeLn("item is:" + item + " " + list[item]);

    }
}
//alert(app.settings.compItem);
printList(frosty);

var comp = app.project.item(1);
var layers = comp.layers;
var width = 1080;
var height = 900;


comp.width = width;
comp.height = height;
writeLn(comp.duration);
//comp.layers.add();

var red = [1, .1, .1];
var name = "red comp!";
var pixelAspect = 1.2;
var redSolid = layers.addSolid(red, name, comp.width, comp.height,  comp.duration);
redSolid.name = "Fuck youuuu";


var settings = app.settings;
