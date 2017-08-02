package com.redhat.labs.service.example;

import io.vertx.codegen.annotations.ProxyGen;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.serviceproxy.ProxyHelper;

@ProxyGen
@VertxGen
public interface TestService {

    static TestService create(Vertx vertx) {
        return new TestServiceImpl(vertx);
    }

    static TestService createProxy(Vertx vertx, String ebAddr) {
        return ProxyHelper.createProxy(TestService.class, vertx, ebAddr);
    }

    void test(Handler<AsyncResult<String>> handler);
}
