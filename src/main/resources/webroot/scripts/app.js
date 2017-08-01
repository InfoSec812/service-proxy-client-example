var eb = new this.EventBus(window.location.origin+"/eventbus/");
var svc = new TestService(eb, "test.service");

var resHandler = function(err, res) {
    var newChild = document.createElement('div');
    if (err === undefined || err === null) {
        newChild.innerHTML = "Success: ".concat(res);
    } else {
        newChild.innerHTML = "Failed: ".concat(err);
    }
    document.getElementById("target").appendChild(newChild);
    svcCaller();
};

var svcCaller = function() {
    window.setTimeout(function() {
        svc.test(resHandler);
    }, 3000);
};

eb.onopen = function() {
    svcCaller();
}