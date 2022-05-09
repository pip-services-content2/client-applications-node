import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';

export class ApplicationsCommandableGrpcClientV1 extends CommandableGrpcClient implements IApplicationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/applications');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>> {
        let timing = this.instrument(correlationId, 'applications.get_applications');

        try {
            return await this.callCommand(
                'get_applications',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
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
            return await this.callCommand(
                'get_application_by_id',
                correlationId,
                {
                    application_id: applicationId
                }
            );  
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
            return await this.callCommand(
                'create_application',
                correlationId,
                {
                    application: application
                }
            );
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
            return await this.callCommand(
                'update_application',
                correlationId,
                {
                    application: application
                }
            );
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
            return await this.callCommand(
                'delete_application_by_id',
                correlationId,
                {
                    application_id: applicationId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
