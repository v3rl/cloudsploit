const async = require('async');
const helpers = require('../../../helpers/azure');

module.exports = {
    title: 'Application Gateway HTTPS Listener',
    category: 'Application Gateway',
    domain: 'Network Access Control',
    severity: 'Medium',
    description: 'Ensures that Application Gateway is not configured to use any non-HTTPS listener.',
    more_info: 'Using HTTPS listeners ensures the encryption of all traffic between the client and the application, providing an additional layer of security reducing risk of security attacks and breaches.',
    recommended_action: 'Remove all non-HTTPS listeners from application gateway and replace them with https listeners.',
    link: 'https://learn.microsoft.com/en-us/azure/application-gateway/configuration-listeners#protocol',
    apis: ['applicationGateway:listAll'],
    realtime_triggers: ['microsoftnetwork:applicationgateways:write', 'microsoftnetwork:applicationgateways:delete'],

    run: function(cache, settings, callback) {
        const results = [];
        const source = {};
        const locations = helpers.locations(settings.govcloud);

        async.each(locations.applicationGateway, (location, rcb) => {
            var appGateways = helpers.addSource(cache, source,
                ['applicationGateway', 'listAll', location]);

            if (!appGateways) return rcb();

            if (appGateways.err || !appGateways.data) {
                helpers.addResult(results, 3, 'Unable to query for Application Gateway: ' + helpers.addError(appGateways), location);
                return rcb();
            }

            if (!appGateways.data.length) {
                helpers.addResult(results, 0, 'No existing Application Gateway found', location);
                return rcb();
            }

            for (let appGateway of appGateways.data) {
                if (!appGateway.id) continue;
                if (appGateway.httpListeners && appGateway.httpListeners.length) {
                     var httpListeners = appGateway.httpListeners.filter(listener => listener.protocol && listener.protocol.toLowerCase() != 'https').map(listener => listener.name)
                }
               
                    .map(listener => listener.name) : [];
                if (httpListeners && httpListeners.length) {
                    helpers.addResult(results, 2, `Application Gateway is using following non-https listeners: ${httpListeners.join(',')}`, location, appGateway.id);
                } else {
                    helpers.addResult(results, 0, 'Application Gateway is not using any non-https listener', location, appGateway.id);
                }
            }

            rcb();
        }, function() {
            callback(null, results, source);
        });
    }
};
