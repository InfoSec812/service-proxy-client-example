import EventBus from 'vertx3-eventbus-client';
import Vue from 'vue';

new Vue({
    el: "#app",
    data: {
        PERIODIC_TIMER: 'periodic.timer',
        eb: null,
        messages: [],
        ebErrCount: 0
    },
    methods: {
        reconnect() {
            this.eb = new EventBus(window.location.origin+'/eventbus/');
            this.eb.onopen = () => {
                this.ebErrCount = 0;
                console.log('EventBus bridge initialized');
                this.eb.registerHandler(this.PERIODIC_TIMER, (err, res) => {
                    if (err) {
                        this.messages.push(JSON.stringify(err));
                    } else {
                        this.messages.push(res.body);
                    }
                    if (this.messages.length>20) {
                        this.messages.shift();
                    }
                });
            };
            this.eb.onclose = () => {
                this.ebErrCount++;
                setTimeout(this.reconnect, 500*this.ebErrCount);
            };
        }
    },
    mounted: function() {
        console.log('Application mounted, starting eventBus Bridge');
        this.reconnect();
    }
});