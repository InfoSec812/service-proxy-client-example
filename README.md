# Vert.x Example Project Using Service Proxies With Vue.JS

## Overview
This project demonstrates the use of Service Proxies in
a frontend web client.

## Instructions

1. Build The Application `mvn clean compile package`
1. Run The Application `java -jar backend/target/backend-<version>.jar`
1. Open A Browser to http://localhost:8080

## Details
This project is set up as a multi-module Maven project. Even the Vue.js project is managed
by Maven using the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin).
The frontend Maven plugin allows various `npm` commands to be tied to Maven phases/goals such that
the entire application is built as part of a single `maven package` command from the parent
project.

## Screenshot
![Screenshot Of Browser](https://github.com/InfoSec812/service-proxy-debugging/blob/master/Screenshot_2017-08-01_10-18-58.png)