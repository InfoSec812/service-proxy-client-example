package com.redhat.labs.service.verticles;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.json.JsonObject;

public class TimerVerticle extends AbstractVerticle {

    public static final String PERIODIC_TIMER = "periodic.timer";

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        vertx.setPeriodic(2000, (t) -> vertx.eventBus().publish(PERIODIC_TIMER, new JsonObject().put("data", "MyData")));
        startFuture.complete();
    }
}
