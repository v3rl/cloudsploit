
var expect = require('chai').expect;
var workSpacesOperationalState = require('./workSpacesOperationalState');

const describeWorkspaces = [
    {
        WorkspaceId: 'ws-f7hsrphp6',
        DirectoryId: 'd-9067552532',
        UserName: 'test',
        IpAddress: '172.16.1.134',
        State: 'AVAILABLE',
        BundleId: 'wsb-clj85qzj1',
        SubnetId: 'subnet-017fd5eda595ac73f',
        ModificationStates: []
    },
    {
        WorkspaceId: 'ws-f7hsrphp6',
        DirectoryId: 'd-9067552532',
        UserName: 'test',
        IpAddress: '172.16.1.134',
        State: 'UNHEALTHY',
        BundleId: 'wsb-clj85qzj1',
        ModificationStates: []
    },
];

const createCache = (data, err) => {
    return {
        workspaces: {
          describeWorkspaces: {
                'us-east-1': {
                    data: data,
                    err: err
                }
            }
        }
    };
};

const createErrorCache = () => {
    return {
        workspaces: {
            describeWorkspaces: {
                'us-east-1': {
                    data: [],
                    err: {
                        message: 'error describing workspaces'
                    },
                }
            }
        }
    };
};

describe('workSpacesOperationalState', function () {
    describe('run', function () {
        it('should PASS if no workspace instances found', function (done) {
            const cache = createCache([]);
            workSpacesOperationalState.run(cache, { }, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(0);
                expect(results[0].region).to.include('us-east-1')
                done();
            });
        });

        it('should UNKNOWN if Unable to query for WorkSpaces instances', function (done) {
            const cache = createErrorCache();
            workSpacesOperationalState.run(cache,{}, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(3);
                expect(results[0].region).to.include('us-east-1')
                done();
            });
        });

        it('should PASS if the Workspace is operational', function (done) {
            const cache = createCache([describeWorkspaces[0]]);
            workSpacesOperationalState.run(cache, { }, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(0);
                expect(results[0].region).to.equal('us-east-1');
                done();
            });
        });

        it('should FAIL if Workspace is not operational', function (done) {
            const cache = createCache([describeWorkspaces[1]]);
            workSpacesOperationalState.run(cache, {  }, (err, results) => {
                expect(results.length).to.equal(1);
                expect(results[0].status).to.equal(2);
                expect(results[0].region).to.equal('us-east-1');
                done();
            });
        });
    });
});
