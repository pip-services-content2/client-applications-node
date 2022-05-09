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
exports.ApplicationsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ApplicationsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/applications');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getApplications(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'applications.get_applications');
            try {
                return yield this.callCommand('get_applications', correlationId, {
                    filter: filter,
                    paging: paging
                });
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
            let timing = this.instrument(correlationId, 'applications.get_application_by_id');
            try {
                return yield this.callCommand('get_application_by_id', correlationId, {
                    application_id: applicationId
                });
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
            let timing = this.instrument(correlationId, 'applications.create_application');
            try {
                return yield this.callCommand('create_application', correlationId, {
                    application: application
                });
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
            let timing = this.instrument(correlationId, 'applications.update_application');
            try {
                return yield this.callCommand('update_application', correlationId, {
                    application: application
                });
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
            let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
            try {
                return yield this.callCommand('delete_application_by_id', correlationId, {
                    application_id: applicationId
                });
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
exports.ApplicationsHttpClientV1 = ApplicationsHttpClientV1;
//# sourceMappingURL=ApplicationsHttpClientV1.js.map