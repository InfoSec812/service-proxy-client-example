// Create an instance of the EventBus
var eb = new this.EventBus(window.location.origin+"/eventbus/");

// Create an instance of the Service Proxy, but it cannot be used until the EventBus is connected
var svc = new TestService(eb, "test.service");

// Create a function handler for service results
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

// Create a timer loop to call the service every 3 seconds
var svcCaller = function() {
    window.setTimeout(function() {
        svc.test(resHandler);
    }, 3000);
};

// Once the EventBus is connected, start the timer loop.
eb.onopen = function() {
    svcCaller();
}