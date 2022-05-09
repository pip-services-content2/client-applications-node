import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
export declare class ApplicationsHttpClientV1 extends CommandableHttpClient implements IApplicationsClientV1 {
    constructor(config?: any);
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>>;
    getApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1>;
    createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
    updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
    deleteApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1>;
}
