"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsGrpcClientV1 = void 0;
const services = require('../../../src/protos/applications_v1_grpc_pb');
const messages = require('../../../src/protos/applications_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const ApplicationsGrpcConverterV1_1 = require("./ApplicationsGrpcConverterV1");
class ApplicationsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.ApplicationsClient);
    }
    getApplications(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.ApplicationPageRequest();
            ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'applications.get_applications');
            try {
                let response = yield this.call('get_applications', correlationId, request);
                if (response.error != null)
                    throw ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
                return response ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplicationPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getApplicationById(correlationId, applicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.ApplicationIdRequest();
            request.setApplicationId(applicationId);
            let timing = this.instrument(correlationId, 'applications.get_application_by_id');
            try {
                let response = yield this.call('get_application_by_id', correlationId, request);
                if (response.error != null)
                    throw ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
                return response ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createApplication(correlationId, application) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationObj = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromApplication(application);
            let request = new messages.ApplicationObjectRequest();
            request.setApplication(applicationObj);
            let timing = this.instrument(correlationId, 'applications.create_application');
            try {
                let response = yield this.call('create_application', correlationId, request);
                if (response.error != null)
                    throw ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
                return response ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateApplication(correlationId, application) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationObj = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromApplication(application);
            let request = new messages.ApplicationObjectRequest();
            request.setApplication(applicationObj);
            let timing = this.instrument(correlationId, 'applications.update_application');
            try {
                let response = yield this.call('update_application', correlationId, request);
                if (response.error != null)
                    throw ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
                return response ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteApplicationById(correlationId, applicationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.ApplicationIdRequest();
            request.setApplicationId(applicationId);
            let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
            try {
                let response = yield this.call('delete_application_by_id', correlationId, request);
                if (response.error != null)
                    throw ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
                return response ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.ApplicationsGrpcClientV1 = ApplicationsGrpcClientV1;
//# sourceMappingURL=ApplicationsGrpcClientV1.js.map