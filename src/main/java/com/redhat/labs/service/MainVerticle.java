package com.redhat.labs.service;

import com.redhat.labs.service.example.TestService;
import com.redhat.labs.service.example.TestServiceImpl;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import io.vertx.ext.web.handler.sockjs.BridgeOptions;
import io.vertx.ext.web.handler.sockjs.PermittedOptions;
import io.vertx.ext.web.handler.sockjs.SockJSHandler;
import io.vertx.serviceproxy.ProxyHelper;

public class MainVerticle extends AbstractVerticle {

    @Override
    public void start(Future startFuture) {
        TestService svc = new TestServiceImpl(vertx);
        ProxyHelper.registerService(TestService.class, vertx, svc, "test.service");

        Router router = Router.router(vertx);
        BridgeOptions bOpts = new BridgeOptions();
        bOpts.addInboundPermitted(new PermittedOptions().setAddress("test.service"));
        bOpts.addOutboundPermitted(new PermittedOptions().setAddress("test.service"));
        SockJSHandler sockJSHandler = SockJSHandler.create(vertx);
        sockJSHandler.bridge(bOpts);
        router.route("/eventbus/*").handler(sockJSHandler);
        router.route().handler(StaticHandler.create().setCachingEnabled(false));

        vertx.createHttpServer().requestHandler(router::accept).listen(8080, startFuture.completer());
    }

}
