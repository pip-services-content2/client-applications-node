"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const ApplicationsNullClientV1_1 = require("../version1/ApplicationsNullClientV1");
const ApplicationsDirectClientV1_1 = require("../version1/ApplicationsDirectClientV1");
const ApplicationsHttpClientV1_1 = require("../version1/ApplicationsHttpClientV1");
const ApplicationsLambdaClientV1_1 = require("../version1/ApplicationsLambdaClientV1");
class ApplicationsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ApplicationsClientFactory.NullClientV1Descriptor, ApplicationsNullClientV1_1.ApplicationsNullClientV1);
        this.registerAsType(ApplicationsClientFactory.DirectClientV1Descriptor, ApplicationsDirectClientV1_1.ApplicationsDirectClientV1);
        this.registerAsType(ApplicationsClientFactory.HttpClientV1Descriptor, ApplicationsHttpClientV1_1.ApplicationsHttpClientV1);
        this.registerAsType(ApplicationsClientFactory.LambdaClientV1Descriptor, ApplicationsLambdaClientV1_1.ApplicationsLambdaClientV1);
    }
}
exports.ApplicationsClientFactory = ApplicationsClientFactory;
ApplicationsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-applications', 'factory', 'default', 'default', '1.0');
ApplicationsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-applications', 'client', 'null', 'default', '1.0');
ApplicationsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-applications', 'client', 'direct', 'default', '1.0');
ApplicationsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-applications', 'client', 'http', 'default', '1.0');
ApplicationsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-applications', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ApplicationsClientFactory.js.map