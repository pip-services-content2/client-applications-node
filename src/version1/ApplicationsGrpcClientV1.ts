const services = require('../../../src/protos/applications_v1_grpc_pb');
const messages = require('../../../src/protos/applications_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
import { ApplicationsGrpcConverterV1 } from './ApplicationsGrpcConverterV1';

export class ApplicationsGrpcClientV1 extends GrpcClient implements IApplicationsClientV1 {
        
    public constructor() {
        super(services.ApplicationsClient);
    }

    public async getApplications(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ApplicationV1>> {
        let request = new messages.ApplicationPageRequest();

        ApplicationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(ApplicationsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'applications.get_applications');

        try {
            let response = await this.call<any>('get_applications', correlationId, request);

            if (response.error != null)
                throw ApplicationsGrpcConverterV1.toError(response.error);

            return response ? ApplicationsGrpcConverterV1.toApplicationPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1> {

        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);

        let timing = this.instrument(correlationId, 'applications.get_application_by_id');

        try {
            let response = await this.call<any>('get_application_by_id', correlationId, request);

            if (response.error != null)
                throw ApplicationsGrpcConverterV1.toError(response.error);

            return response ? ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }       
    }

    public async createApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {

        let applicationObj = ApplicationsGrpcConverterV1.fromApplication(application);

        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);

        let timing = this.instrument(correlationId, 'applications.create_application');

        try {
            let response = await this.call<any>('create_application', correlationId, request);

            if (response.error != null)
                throw ApplicationsGrpcConverterV1.toError(response.error);

            return response ? ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateApplication(correlationId: string, application: ApplicationV1): Promise<ApplicationV1> {
        let applicationObj = ApplicationsGrpcConverterV1.fromApplication(application);

        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);
    
        let timing = this.instrument(correlationId, 'applications.update_application');

        try {
            let response = await this.call<any>('update_application', correlationId, request);

            if (response.error != null)
                throw ApplicationsGrpcConverterV1.toError(response.error);

            return response ? ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteApplicationById(correlationId: string, applicationId: string): Promise<ApplicationV1> {

        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);

        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');

        try {
            let response = await this.call<any>('delete_application_by_id', correlationId, request);

            if (response.error != null)
                throw ApplicationsGrpcConverterV1.toError(response.error);

            return response ? ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
