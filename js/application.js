/**
 * @author maoliang
 */

window.DemoApp= Ember.Application.create({
    LOG_TRANSITIONS: true,
    //LOG_TRANSITIONS_INTERNAL: true
});

DemoApp.ApplicationAdapter = DS.FixtureAdapter.extend();