import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
//import { IApplicationsController } from 'service-applications-node';
import { ApplicationV1 } from './ApplicationV1';

export class ApplicationsDirectClientV1 extends DirectClient<any> implements IApplicationsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-applications", "controller", "*", "*", "*"))
    }

    public async getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>> {
        let timing = this.instrument(correlationId, 'applications.get_applications');
        
        try {
            return await this._controller.getApplications(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1> {
        let timing = this.instrument(correlationId, 'applications.get_application_by_id');

        try {
            return await this._controller.getApplicationById(correlationId, applicationId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {
        let timing = this.instrument(correlationId, 'applications.create_application');
        
        try {
            return await this._controller.createApplication(correlationId, application);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {
        let timing = this.instrument(correlationId, 'applications.update_application');
        
        try {
            return await this._controller.updateApplication(correlationId, application);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1> {
        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
        
        try {
            return await this._controller.deleteApplicationById(correlationId, applicationId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}