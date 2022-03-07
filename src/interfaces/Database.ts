export interface Database<T> {
    create(a: T): Promise<any>;
    getData(extraQuery: string): Promise<any>;
    updateData?(data: {[key: string]: string | number | boolean}): Promise<any>;
    deleteData?(id: string): Promise<any>;
}
