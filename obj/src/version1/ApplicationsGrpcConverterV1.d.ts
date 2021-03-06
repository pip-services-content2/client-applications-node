import { DataPage } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { ApplicationV1 } from './ApplicationV1';
export declare class ApplicationsGrpcConverterV1 {
    static fromError(err: any): any;
    static toError(obj: any): any;
    static setMap(map: any, values: any): void;
    static getMap(map: any): any;
    private static toJson;
    private static fromJson;
    static fromPagingParams(paging: PagingParams): any;
    static toPagingParams(obj: any): PagingParams;
    static fromApplication(application: ApplicationV1): any;
    static toApplication(obj: any): ApplicationV1;
    static fromApplicationPage(page: DataPage<ApplicationV1>): any;
    static toApplicationPage(obj: any): DataPage<ApplicationV1>;
}
