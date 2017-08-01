# Vert.x Example Project Using Service Proxies

## Overview
This project demonstrates that there are problems using the Vert.x
Service Proxy generated code in front-end JavaScript.

## Instructions

1. Run The Application `mvn clean compile vertx:run`
1. Open A Browser to http://localhost:8080
1. Set a breakpoint on `scripts/test_service-proxy.js` on line 73
1. Note that `j_eb`, `j_address`, and `__args[0]._jdel` are all `undefined`.

## Screenshot
![Screenshot Of Browser Debugging](https://github.com/InfoSec812/service-proxy-debugging/blob/master/Screenshot_2017-08-01_05-16-48.png)
