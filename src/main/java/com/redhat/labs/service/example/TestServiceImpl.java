package com.redhat.labs.service.example;

import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.TimeZone;

public class TestServiceImpl implements TestService {

    private final Vertx vertx;

    public TestServiceImpl(Vertx vertx) {
        this.vertx = vertx;
    }

    public void test(Handler<AsyncResult<String>> handler) {
        StringBuilder sb = new StringBuilder("Test Result: ");
        sb.append(Instant.now().atZone(ZoneId.systemDefault()).format(DateTimeFormatter.RFC_1123_DATE_TIME));
        handler.handle(Future.succeededFuture(sb.toString()));
    }
}
