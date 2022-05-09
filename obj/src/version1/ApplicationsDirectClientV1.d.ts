import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
export declare class ApplicationsDirectClientV1 extends DirectClient<any> implements IApplicationsClientV1 {
    constructor();
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>>;
    getApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1>;
    createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
    updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
    deleteApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1>;
}
