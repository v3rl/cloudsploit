// Source: https://cloud.google.com/about/locations/

var regions = [
    'us-east1',                     // South Carolina
    'us-east4',                     // North Virginia
    'us-west1',                     // Oregon
    'us-west2',                     // Los Angeles
    'us-west3',                     // Salt Lake City
    'us-west4',                     // Las Vegas
    'us-east5',                     // Columbus
    'us-south1',                    // Dallas
    'us-central1',                  // Iowa
    'northamerica-northeast1',      // Montreal
    'northamerica-northeast2',      // Toronto
    'southamerica-east1',           // Sao Paulo
    'southamerica-west1',           // Santiago
    'europe-west1',                 // Belgium
    'europe-west2',                 // London
    'europe-west3',                 // Frankfurt
    'europe-west4',                 // Netherlands
    'europe-west6',                 // Zurich
    'europe-north1',                // Finland
    'europe-central2',              // Warsaw
    'europe-west8',                 // Milan
    'europe-southwest1',            // Madrid
    'europe-west9',                 // Paris
    'asia-south1',                  // Mumbai
    'asia-south2',                  // Delhi
    'asia-southeast1',              // Singapore
    'asia-southeast2',              // Jakarta
    'asia-east1',                   // Taiwan
    'asia-east2',                   // Hong Kong
    'asia-northeast1',              // Tokyo
    'asia-northeast2',              // Osaka
    'asia-northeast3',              // Seoul
    'australia-southeast1',         // Sydney
    'australia-southeast2',         // Melbourne
    'me-west1',                     // Tel Aviv
];

var KMSregions = [
    'africa-south1',
    'asia',
    'asia-east1',
    'asia-east2',
    'asia-northeast1',
    'asia-northeast2',
    'asia-northeast3',
    'asia-south1',
    'asia-south2',
    'asia-southeast1',
    'asia-southeast2',
    'asia1',
    'au',
    'australia-southeast1',
    'australia-southeast2',
    'ca',
    'eur3',
    'eur4',
    'eur5',
    'eur6',
    'eur7',
    'europe',
    'europe-central2',
    'europe-north1',
    'europe-southwest1',
    'europe-west1',
    'europe-west10',
    'europe-west12',
    'europe-west2',
    'europe-west3',
    'europe-west4',
    'europe-west6',
    'europe-west8',
    'europe-west9',
    'global',
    'in',
    'it',
    'me-central1',
    'me-central2',
    'me-west1',
    'nam-eur-asia1',
    'nam10',
    'nam11',
    'nam12',
    'nam3',
    'nam4',
    'nam6',
    'nam7',
    'nam8',
    'nam9',
    'northamerica-northeast1',
    'northamerica-northeast2',
    'southamerica-east1',
    'southamerica-west1',
    'us',
    'us-central1',
    'us-east1',
    'us-east4',
    'us-east5',
    'us-south1',
    'us-west1',
    'us-west2',
    'us-west3',
    'us-west4'
];


var artifactRegions = [
    'us',
    'europe',
    'asia'
];


var zones = {
    'us-east1'                      : ['us-east1-b', 'us-east1-c', 'us-east1-d'],
    'us-east4'                      : ['us-east4-a', 'us-east4-b', 'us-east4-c'],
    'us-east5'                      : ['us-east5-a', 'us-east5-b', 'us-east5-c'],
    'us-south1'                      : ['us-south1-a', 'us-south1-b', 'us-south1-c'],
    'us-west1'                      : ['us-west1-a', 'us-west1-b', 'us-west1-c'],
    'us-west2'                      : ['us-west2-a', 'us-west2-b', 'us-west2-c'],
    'us-west3'                      : ['us-west3-a', 'us-west3-b', 'us-west3-c'],
    'us-west4'                      : ['us-west4-a', 'us-west4-b', 'us-west4-c'],
    'us-central1'                   : ['us-central1-a', 'us-central1-b', 'us-central1-c', 'us-central1-f'],
    'northamerica-northeast1'       : ['northamerica-northeast1-a', 'northamerica-northeast1-b', 'northamerica-northeast1-c'],
    'northamerica-northeast2'       : ['northamerica-northeast2-a', 'northamerica-northeast2-b', 'northamerica-northeast2-c'],
    'southamerica-east1'            : ['southamerica-east1-a', 'southamerica-east1-b', 'southamerica-east1-c'],
    'southamerica-west1'            : ['southamerica-west1-a', 'southamerica-west1-b', 'southamerica-west1-c'],
    'europe-west1'                  : ['europe-west1-b', 'europe-west1-c', 'europe-west1-d'],
    'europe-west2'                  : ['europe-west2-a', 'europe-west2-b', 'europe-west2-c'],
    'europe-west3'                  : ['europe-west3-a', 'europe-west3-b', 'europe-west3-c'],
    'europe-west4'                  : ['europe-west4-a', 'europe-west4-b', 'europe-west4-c'],
    'europe-west5'                  : ['europe-west5-a', 'europe-west5-b', 'europe-west5-c'],
    'europe-west6'                  : ['europe-west6-a', 'europe-west6-b', 'europe-west6-c'],
    'europe-north1'                 : ['europe-north1-a', 'europe-north1-b', 'europe-north1-c'],
    'europe-central2'               : ['europe-central2-a', 'europe-central2-b', 'europe-central2-c'],
    'europe-southwest1'             : ['europe-southwest1-a', 'europe-southwest1-b', 'europe-southwest1-c'],
    'europe-west8'                  : ['europe-west8-a', 'europe-west8-b', 'europe-west8-c'],
    'europe-west9'                  : ['europe-west9-a', 'europe-west9-b', 'europe-west9-c'],
    'asia-south1'                   : ['asia-south1-a', 'asia-south1-b', 'asia-south1-c'],
    'asia-south2'                   : ['asia-south2-a', 'asia-south2-b', 'asia-south2-c'],
    'asia-southeast1'               : ['asia-southeast1-a', 'asia-southeast1-b', 'asia-southeast1-c'],
    'asia-southeast2'               : ['asia-southeast2-a', 'asia-southeast2-b', 'asia-southeast2-c'],
    'asia-east1'                    : ['asia-east1-a', 'asia-east1-b', 'asia-east1-c'],
    'asia-east2'                    : ['asia-east2-a', 'asia-east2-b', 'asia-east2-c'],
    'asia-northeast1'               : ['asia-northeast1-a', 'asia-northeast1-b', 'asia-northeast1-c'],
    'asia-northeast2'               : ['asia-northeast2-a', 'asia-northeast2-b', 'asia-northeast2-c'],
    'asia-northeast3'               : ['asia-northeast3-a', 'asia-northeast3-b', 'asia-northeast3-c'],
    'australia-southeast1'          : ['australia-southeast1-a', 'australia-southeast1-b', 'australia-southeast1-c'],
    'australia-southeast2'          : ['australia-southeast2-a', 'australia-southeast2-b', 'australia-southeast2-c'],
    'me-west1'                      : ['me-west1-a', 'me-west1-b', 'me-west1-c'],
};

module.exports = {
    all_regions: regions,
    zones: zones,
    disks: ['global', ...regions],
    images: ['global'],
    repositories: [...regions, ...artifactRegions],
    keyRings: ['global', ...KMSregions],
    cryptoKeys: ['global', ...KMSregions],
    securityPolicies: ['global'],
    resourcePolicies: regions,
    snapshots: ['global'],
    firewalls: ['global'],
    buckets: ['global'],
    compute: regions,
    sql: ['global'],
    spanner: ['global'],
    bigtable:['global'],
    composer: [
        'us-west1', 'us-west2', 'us-west3', 'us-west4', 'us-central1', 'us-east1', 'us-east4', 'northamerica-northeast1', 'southamerica-east1',
        'europe-west2', 'europe-west1', 'europe-west6', 'europe-west3', 'europe-central2', 'asia-south1', 'asia-southeast1', 'asia-east2', 'asia-northeast1',
        'asia-northeast2', 'australia-southeast1', 'asia-northeast3'
    ],
    instanceGroupManagers: regions,
    functions: [
        'us-east1', 'us-east4', 'us-west1','us-west2', 'us-west3', 'us-west4', 'us-central1', 'northamerica-northeast1', 'southamerica-east1',
        'europe-west1', 'europe-west2', 'europe-west3', 'europe-west6', 'europe-central2', 'asia-south1', 'asia-southeast1', 'asia-southeast2',
        'asia-east1', 'asia-east2', 'asia-northeast1', 'asia-northeast2', 'asia-northeast3', 'australia-southeast1'
    ],
    cloudbuild: ['global', 'us-east1', 'us-east4', 'us-west2', 'us-west3', 'us-west4', 'us-central1', 'us-west1',
        'northamerica-northeast1', 'northamerica-northeast2', 'southamerica-east1', 'southamerica-west1', 'europe-west1', 'europe-west2',
        'europe-west3', 'europe-west4', 'europe-west6', 'europe-central2', 'europe-north1', 'asia-south1', 'asia-south2', 'asia-southeast1', 'asia-southeast2',
        'asia-east1', 'asia-east2', 'asia-northeast1', 'asia-northeast2', 'asia-northeast3', 'australia-southeast1', 'australia-southeast2'
    ],
    instanceTemplates: ['global'],
    networks: ['global'],
    backendServices: ['global', ...regions],
    forwardingRules: ['global', ...regions],
    healthChecks: ['global'],
    targetHttpProxies: ['global', ...regions],
    targetHttpsProxies: ['global', ...regions],
    instanceGroups: ['global'],
    autoscalers: ['global'],
    subnetworks: regions,
    projects: ['global'],
    dataproc: regions,
    kubernetes: ['global'],
    managedZones: ['global'],
    metrics: ['global'],
    alertPolicies: ['global'],
    serviceAccounts: ['global'],
    keys: ['global'],
    sinks: ['global'],
    users: ['global'],
    backupRuns: ['global'],
    datasets: ['global'],
    bigqueryTables: ['global'],
    policies: ['global'],
    topics: ['global'],
    subscriptions: ['global'],
    jobs: regions,
    organizations: ['global'],
    folders: ['global'],
    groups: ['global'],
    memberships: ['global'],
    iam: ['global'],
    deployments: ['global'],
    urlMaps: ['global',...regions],
    apiKeys: ['global'],
    resourceRecordSets: ['global'],
    services: ['global'],
    accessApproval: ['global'],
    networkRoutes: ['global'],
    roles: ['global'],
    apiGateways: ['global','asia-northeast1', 'australia-southeast1', 'europe-west1', 'europe-west2', 'us-central1', 'us-east1', 'us-east4', 'us-west2', 'us-west3', 'us-west4'],
    api: ['global','asia-northeast1', 'australia-southeast1', 'europe-west1', 'europe-west2', 'us-central1', 'us-east1', 'us-east4', 'us-west2', 'us-west3', 'us-west4'],
    apiConfigs: ['global','asia-northeast1', 'australia-southeast1', 'europe-west1', 'europe-west2', 'us-central1', 'us-east1', 'us-east4', 'us-west2', 'us-west3', 'us-west4'],
    vertexAI: ['us-west1', 'us-west2', 'us-west3', 'us-west4', 'us-central1', 'us-east1', 'us-east4', 'us-south1',
        'northamerica-northeast1', 'northamerica-northeast2', 'southamerica-east1', 'southamerica-west1', 'europe-west1',
        'europe-west2', 'europe-west3', 'europe-west4', 'europe-west6', 'europe-west8', 'europe-west9', 'europe-north1', 'europe-central2',
        'europe-southwest1', 'asia-south1', 'asia-southeast1', 'asia-southeast2', 'asia-east1', 'asia-east2', 'asia-northeast1',
        'asia-northeast2', 'australia-southeast2', 'australia-southeast1', 'asia-northeast3', 'me-west1']
};
