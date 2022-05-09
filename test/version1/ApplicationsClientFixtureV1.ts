const assert = require('chai').assert;

import { PagingParams, MultiString } from 'pip-services3-commons-nodex';

import { ApplicationV1 } from '../../src/version1/ApplicationV1';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';

let APPLICATION1: ApplicationV1 = {
    id: '1',
    name: new MultiString({ en: 'App 1' }),
    product: 'Product 1',
    copyrights: 'PipDevs 2018',
    min_ver: 0,
    max_ver: 9999
};
let APPLICATION2: ApplicationV1 = {
    id: '2',
    name: new MultiString({ en: 'App 2' }),
    product: 'Product 1',
    copyrights: 'PipDevs 2018',
    min_ver: 0,
    max_ver: 9999
};

export class ApplicationsClientFixtureV1 {
    private _client: IApplicationsClientV1;
    
    constructor(client: IApplicationsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let application1, application2: ApplicationV1;

        // Create one application
        let application = await this._client.createApplication(null, APPLICATION1);

        assert.isObject(application);
        // assert.equal(application.name.get('en'), APPLICATION1.name.get('en'));
        assert.equal(application.product, APPLICATION1.product);
        assert.equal(application.copyrights, APPLICATION1.copyrights);

        application1 = application;

        // Create another application
        application = await this._client.createApplication(null, APPLICATION2);

        assert.isObject(application);
        // assert.equal(application.name.get('en'), APPLICATION2.name.get('en'));
        assert.equal(application.product, APPLICATION2.product);
        assert.equal(application.copyrights, APPLICATION2.copyrights);

        application2 = application;

        // Get all applications
        let applications = await this._client.getApplications(null, null, new PagingParams(0, 5, false));

        assert.isObject(applications);
        assert.isTrue(applications.data.length >= 2);

        // Update the application
        // application1.name.put('en', 'Updated Name 1');
        application1.name = new MultiString({ en: 'Updated Name 1' });

        application = await this._client.updateApplication(null, application1);
        
        assert.isObject(application);
        // assert.equal(application.name.get('en'), 'Updated Name 1');
        assert.equal(application.id, APPLICATION1.id);

        application1 = application;

        // Delete application
        await this._client.deleteApplicationById(null, application1.id);

        // Try to get delete application
        application = await this._client.getApplicationById(null, application1.id);

        assert.isNull(application || null);
    }
}
