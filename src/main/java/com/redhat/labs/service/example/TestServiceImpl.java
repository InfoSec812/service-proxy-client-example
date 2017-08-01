package com.redhat.labs.service.example;

import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;

public class TestServiceImpl implements TestService {

    private final Vertx vertx;

    public TestServiceImpl(Vertx vertx) {
        this.vertx = vertx;
    }

    public void test(Handler<AsyncResult<String>> handler) {
        handler.handle(Future.succeededFuture("Test Result"));
    }
}
