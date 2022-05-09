import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';

export class ApplicationsNullClientV1 implements IApplicationsClientV1 {
    
    public async getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>> {
        return null;
    }

    public async getApplicationById(correlationId: string, application_id: string): Promise<ApplicationV1> {
        return null;
    }

    public async updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {
        return null;
    }
    
    public async deleteApplicationById(correlationId: string, application_id: string): Promise<ApplicationV1> {
        return null;
    }

    public async createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {
        return application;
    }
}