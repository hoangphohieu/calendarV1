// tao folder a5
var folderA4 = Folder("~/Desktop/save a4");
if (!folderA4.exists) { folderA4.create(); }

// var stCheck = "t%20(1).jpg";
var stCheck = "bia.jpg,t (1).jpg,t (2).jpgcurrentFile,t (4).jpg,t (5).jpg,t (6).jpg,t (7).jpg,t (8).jpg,t (9).jpg,t (10).jpg,t (11).jpg,t (12).jpg";
var customerChildren = Folder("~/Desktop/save customer").getFiles("*");
for (var i = 0; i < customerChildren.length; i++) {
    var currentFolder = String(customerChildren[i]).split("/");   // đường dẫn thư mục là  customerChildren[i]
    currentFolder = currentFolder[currentFolder.length - 1];
    if (currentFolder.split(".").length === 1) { // chỉ chọn những folder. còn file thì không
        var ListFileChildren = Folder(customerChildren[i]).getFiles("*");
        if (ListFileChildren.length < 13) {
            alert(" co thu muc khong du 13 file");
        }
        else if (ListFileChildren.length === 13) {
            // alert(ListFileChildren);
            // alert(stCheck);


            try {


                app.documents.add(2480, 3508, 300, "a4");
                for (var i2 = 1; i2 <= 12; i2 = i2 + 2) {
                    // alert(customerChildren[i]+"/t ("+i2+").jpg");
                    app.open(File(customerChildren[i] + "/t%20(" + i2 + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");

                    app.open(File(customerChildren[i] + "/t%20(" + (i2 + 1) + ").jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le duoi", "calendar");

                    app.doAction("hop nhat", "calendar");
                    app.activeDocument.duplicate(currentFolder, false);
                    jpgOption = new JPEGSaveOptions();
                    jpgOption.quality = 12;
                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " " + (((i2 + 1) / 2) + 1) + ".jpg"), jpgOption, true, Extension.LOWERCASE);
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            } catch (error) {

            }



        }

    }

}
// var name2 = String(inputFolder[0]).split("/");
// var name3 = name2[name2.length - 1]


// var folder2 = Folder(inputFolder[0]).getFiles("*");
// // var fileDialog = app.openDialog();
// // var file = new File(fileDialog);
// app.open(File(folder2[0]));
// var folderAa = Folder("~/Desktop/save a5/" + name3 + ".tif");
// app.activeDocument.saveAs(folderAa, TiffSaveOptions, false, Extension.LOWERCASE);
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