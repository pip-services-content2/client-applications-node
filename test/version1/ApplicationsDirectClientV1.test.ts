import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ApplicationsMemoryPersistence } from 'service-applications-node';
import { ApplicationsController } from 'service-applications-node';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';
import { ApplicationsDirectClientV1 } from '../../src/version1/ApplicationsDirectClientV1';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';

suite('ApplicationsDirectClientV1', ()=> {
    let client: ApplicationsDirectClientV1;
    let fixture: ApplicationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ApplicationsMemoryPersistence();
        let controller = new ApplicationsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-applications', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-applications', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ApplicationsDirectClientV1();
        client.setReferences(references);

        fixture = new ApplicationsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
