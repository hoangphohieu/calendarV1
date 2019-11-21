// tao folder a5
var folderA4 = Folder("~/Desktop/save a4");
if (!folderA4.exists) { folderA4.create(); }
var folderA5 = Folder("~/Desktop/save a5");

var inputFolder = folderA5.getFiles("*");
var name2 =String( inputFolder[0]).split("/");
var name3 = name2[name2.length-1]


var folder2 = Folder(inputFolder[0]).getFiles("*");
// var fileDialog = app.openDialog();
// var file = new File(fileDialog);
app.open(File(folder2[0]));
var folderAa = Folder("~/Desktop/save a5/"+name3+".tif");
app.activeDocument.saveAs(folderAa, TiffSaveOptions, false, Extension.LOWERCASE);
// alert(name3)

// try {
//     var thisDocument = app.activeDocument.name;
//     var nameSave = thisDocument.split(".")[0];
//     var fileName = Folder("~/Desktop/save a4/" + nameSave);
//     jpgOption = new JPEGSaveOptions();
//     jpgOption.quality = 12;
//     app.activeDocument.saveAs(fileName, jpgOption, true, Extension.LOWERCASE);
//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// } catch (error) {
//     alert("have no thing to do !");

// }