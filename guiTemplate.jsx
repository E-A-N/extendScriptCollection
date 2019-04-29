var mainComp = app.project.activeItem;
var thereAreNoLayers = mainComp.layers.length === 0;

if (thereAreNoLayers){
    alert("There are no layers to build on.");
    writeLn("There are no layers to build on.");
}
else {
    var mainLayer = mainComp.layer(1);

    var guiTitle = "Gui Title Goes Here";
    var mainGUI = new Window("palette", guiTitle, undefined);

    var group1 = mainGUI.add("group", undefined, "group1");
    group1.orientation = "column";

    var g1Description = group1.add("statictext", undefined, "This is where you add your program description!");
    var g1Title       = group1.add("edittext", undefined, "Title");
    var g1TitleDuration = group1.add("edittext", undefined, "Duration");
    var textInput = group1.add("edittext", undefined, "Input your text here");

    var group2 = mainGUI.add("group", undefined, "group2");
    group2.orientation = "row";

    var btn1 = group2.add("button", undefined, "start");
    var btn2 = group2.add("button", undefined, "cancel");

    btn1.onClick = function(arg){
        writeLn("Btn1 has been clicked!");
        writeLn("Btn1 arg is: " + arg);
    };

    btn2.onClick = function(){
        writeLn("Btn2 has been clicked!");
        mainGUI.close();
    }

    mainGUI.show();
    mainGUI.center();
}
