app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
var folderA4 = Folder("~/Desktop/save a4");
if (folderA4.exists) {
    alert("please delete folder 'save a4' and try it again ");
}
else {
    folderA4.create();
    jpgOption = new JPEGSaveOptions();
    jpgOption.quality = 12;

    var customerChildren = Folder("~/Desktop/save customer").getFiles("*");
    for (var i = 0; i < customerChildren.length; i++) {
        var currentFolder = String(customerChildren[i]).split("/");   // đường dẫn thư mục là  customerChildren[i]
        currentFolder = currentFolder[currentFolder.length - 1];
        if (currentFolder.split(".").length === 1) { // chỉ chọn những folder. còn file thì không
            var ListFileChildren = Folder(customerChildren[i]).getFiles("*");
            if (ListFileChildren.length < 13) {
                alert(" co cuon mot mat khong du 13 file");
            }
            else if (ListFileChildren.length < 15) { // nếu lịch có 1 mặt 13-14 file thì làm cái này
                try {


                    // lam to bia
                    app.documents.add(2480, 3508, 300, "a4");
                    app.open(File(customerChildren[i] + "/bia.jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");

                    try {
                        app.open(File(customerChildren[i] + "/biasau.jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                    } catch (error) {
                        app.open(File(customerChildren[i] + "/bia.jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                    }
                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (1).jpg"), jpgOption, true, Extension.LOWERCASE);


                    // lam 12 thang
                    for (var i2 = 1; i2 <= 12; i2 = i2 + 2) {
                        app.open(File(customerChildren[i] + "/t%20(" + i2 + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le tren", "calendar");

                        app.open(File(customerChildren[i] + "/t%20(" + (i2 + 1) + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");

                        app.doAction("hop nhat", "calendar");

                        app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (" + (((i2 + 1) / 2) + 1) + ").jpg"), jpgOption, true, Extension.LOWERCASE);

    
                    }
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                } catch (error) {
                    alert(customerChildren[i]+ ": Dat sai ten, vui long thu lai");
                }



            }
            else { // nếu lịch 2 mặt -  22 file thì làm cái này

                try {


                    // lam to bia
                    app.documents.add(2480, 3508, 300, "a4");
                    app.open(File(customerChildren[i] + "/bia.jpg"));
                    app.doAction("duplicate to a4", "calendar");
                    app.doAction("can giua", "calendar");
                    app.doAction("can le tren", "calendar");

                    try {
                        app.open(File(customerChildren[i] + "/biasau.jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                    } catch (error) {
                        app.open(File(customerChildren[i] + "/bia.jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                    }
                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (1).jpg"), jpgOption, true, Extension.LOWERCASE);
                    app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (2).jpg"), jpgOption, true, Extension.LOWERCASE);


                    // lam 12 thang
                    for (var i2 = 1; i2 <= 12; i2 = i2 + 2) {



                        app.open(File(customerChildren[i] + "/t%20(" + i2 + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le tren", "calendar");
                        app.open(File(customerChildren[i] + "/t%20(" + (i2 + 1) + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                        app.doAction("hop nhat", "calendar");
        
                        app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (" + (i2+2) + ").jpg"), jpgOption, true, Extension.LOWERCASE);
                       
                        app.open(File(customerChildren[i] + "/s%20(" + i2 + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le tren", "calendar");
                        app.open(File(customerChildren[i] + "/s%20(" + (i2 + 1) + ").jpg"));
                        app.doAction("duplicate to a4", "calendar");
                        app.doAction("can giua", "calendar");
                        app.doAction("can le duoi", "calendar");
                        app.doAction("hop nhat", "calendar");
                       
                        app.activeDocument.saveAs(Folder("~/Desktop/save a4/" + currentFolder + " (" + (i2+3) + ").jpg"), jpgOption, true, Extension.LOWERCASE);
                       
                    }
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                } catch (error) {
                    alert(currentFolder+ ": Dat sai ten, vui long thu lai");
                }

            }
        }

    }
}

