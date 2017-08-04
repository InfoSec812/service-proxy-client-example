import EventBus from 'vertx3-eventbus-client';
import TestService from '@/lib/test-service-js/test_service-proxy';
import Vue from 'vue';

new Vue({
    el: "#app",
    data: {
        PERIODIC_TIMER: 'periodic.timer',
        eb: null,
        messages: [],
        ebErrCount: 0,
        testSvc: null
    },
    methods: {
        pushMessage(msg) {
            this.messages.push(msg);
            if (this.messages.length>20) {
                this.messages.shift();
            }
        },
        reconnect() {
            this.eb = new EventBus(window.location.origin+'/eventbus/');
            this.eb.onopen = () => {
                this.ebErrCount = 0;
                console.log('EventBus bridge initialized');

                // Initialize the service proxy
                this.testSvc = new TestService(this.eb, "test.service");

                // Register a handler for incoming messages off of the EventBus
                this.eb.registerHandler(this.PERIODIC_TIMER, (err, res) => {
                    if (err) {
                        this.pushMessage(JSON.stringify(err));
                    } else {
                        if (res.body==='SPACER') {
                            // When the incoming message is 'SPACER', make a call
                            // using the Service Proxy and push the result.
                            this.testSvc.test((err1, res1) => {
                                if (err1) {
                                    this.pushMessage(JSON.stringify(err1));
                                } else {
                                    this.pushMessage(res1);
                                }
                            });
                        } else {
                            this.pushMessage(res.body);
                        }
                    }
                });
            };
            this.eb.onclose = () => {
                const reconnectDelay = 500*
                console.log("EventBus disconnected. ")
            };
        }

    },
    mounted: function() {
        console.log('Application mounted, starting eventBus Bridge');
        this.reconnect();
    }
});