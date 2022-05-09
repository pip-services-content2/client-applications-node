import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ApplicationsMemoryPersistence } from 'service-applications-node';
import { ApplicationsController } from 'service-applications-node';
import { ApplicationsCommandableGrpcServiceV1 } from 'service-applications-node';
import { ApplicationsCommandableGrpcClientV1 } from '../../src/version1/ApplicationsCommandableGrpcClientV1';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ApplicationsCommandableGrpcClientV1', ()=> {
    let service: ApplicationsCommandableGrpcServiceV1;
    let client: ApplicationsCommandableGrpcClientV1;
    let fixture: ApplicationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ApplicationsMemoryPersistence();
        let controller = new ApplicationsController();

        service = new ApplicationsCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-applications', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-applications', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-applications', 'service', 'commandable-grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ApplicationsCommandableGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ApplicationsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
