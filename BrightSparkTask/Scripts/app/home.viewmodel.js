function HomeViewModel(app, dataModel) {
    var self = this;

    self.currentNumber = ko.observable("0");
    self.previous = ko.observable("0");
    self.val1 = 0;
    self.val2 = 0;
    self.sign = ko.observable("");
    self.signClicked = false;

    self.clickValue = function (value) {
        if (self.currentNumber() === "0") {
            self.currentNumber(value);
        }
        else {            
            if (value === '.' && self.currentNumber().includes(".")) {
                return;
            }
            else {
                value = self.currentNumber() + value;
                self.currentNumber(value);
            }
        }
        if (self.signClicked === true) {
            self.val2 = parseFloat(self.currentNumber());
        }
        else {
            self.val1 = parseFloat(self.currentNumber());
        }
       
    };

    self.clearScreen = function () {
        self.currentNumber("0");
        self.previous("0");
        self.sign("");
    };

    self.trimLast = function () {
        if (self.currentNumber().length === 1)
            self.currentNumber("0");
        else {
            var val = self.currentNumber();
            val = val.substring(0, val.length - 1);
            self.currentNumber(val);
        }
    };
    self.equalClick = function () {
        switch (self.sign()) {
            case "+":
                performFunction('getsum');
                break;
            case "-":
                performFunction('getsub');
                break;
            case "*":
                performFunction('getmult');
                break;
            case "/":
                performFunction('getdiv');
                break;
        }       
    };

    self.signClick = function (value) {
        self.signClicked = true;
        self.sign(value);
        self.previous(self.val1 + " " + value);
        
        self.currentNumber("0");        
    };

    self.bracketOpen = function () {

    };

    self.bracketClose = function () {

    };

    function performFunction(uri) {
        $.ajax({
            method: 'get',
            url: '/api/calc/' + uri,
            data: { x: self.val1, y: self.val2 },
            contentType: "application/json; charset=utf-8",
            headers: {
                'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
            },
            success: function (data) {
                self.currentNumber(data.toString());
                var previous = self.val1 + " " + self.sign() + " " + self.val2 + " = " + self.currentNumber();
                self.previous(previous);
                self.val1 = data;
                self.val2 = 0;
                self.signClicked = false;
            }
        });
    }

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
