import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
export declare class ApplicationsNullClientV1 implements IApplicationsClientV1 {
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>>;
    getApplicationById(correlationId: string, application_id: string): Promise<ApplicationV1>;
    updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
    deleteApplicationById(correlationId: string, application_id: string): Promise<ApplicationV1>;
    createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1>;
}
