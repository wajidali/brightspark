function SettingsViewModel(app, dataModel) {
    var self = this;

   self.uploadFile = function () {
       var xhr = new XMLHttpRequest();
       var file = document.getElementById('myfile').files[0];
       var formData = new FormData();
       formData.append("thefile", file);
       xhr.open("POST", "http://localhost:44364/api/settings/myfileupload");
       xhr.setRequestHeader("filename", file.name);
       xhr.send(formData);      
    };

    return self;
}

app.addViewModel({
    name: "Settings",
    bindingMemberName: "settings",
    factory: SettingsViewModel
});
