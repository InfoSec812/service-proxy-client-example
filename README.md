# Vert.x Example Project Using Service Proxies With Vue.JS

## Overview
This project demonstrates the use of Service Proxies in
a frontend web client.

## Instructions

1. Build The Application `mvn clean package vertx:package`
1. Run The Application `java -jar backend/target/backend-<version>.jar`
1. Open A Browser to http://localhost:8080

## Details
This project is a combination of a Vert.x Java application and a Vue.js/WebPack application. The
whole project is wired into Maven using the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)
such that running the typical Maven operations (`mvn clean package vertx:package`) will compile
the Java code, trans-pile the Vue.js ES6 code, and package the whole thing as an executable JAR file.

## How it works

### Vert.x Code
* The Vert.x code is in Java, under the `src/main/java` directory. 
* The entry-point for the app is `com.redhat.labs.service.MainVerticle`. 
* The MainVerticle registers the [Service Proxy](http://vertx.io/docs/vertx-service-proxy/java/) called `TestService` on the EventBus.
* The MainVerticle creates a [Router](http://vertx.io/docs/vertx-web/java/#_basic_vert_x_web_concepts)
* We tie various paths and HTTP verbs to the router
* We create an additional Router instance for the REST API
* We *mount* the REST Router as a `subrouter` on the top-level Router
* We tell Vert.x that the application is ready.

### Vue.js Code
