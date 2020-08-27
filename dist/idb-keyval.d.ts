export declare class Store {
    readonly storeName: string;
    private _dbp;
    readonly _dbName: string;
    readonly _storeName: string;
    readonly id: string;
    constructor(dbName?: string, storeName?: string);
    _init(): void;
    _withIDBStore(type: IDBTransactionMode, callback: ((store: IDBObjectStore) => void)): Promise<void>;
    _close(): Promise<void>;
}
export declare function get<Type>(key: IDBValidKey, store?: Store): Promise<Type>;
export declare function set(key: IDBValidKey, value: any, store?: Store): Promise<void>;
export declare function update(key: IDBValidKey, updater: (val: any) => any, store?: Store): Promise<void>;
export declare function del(key: IDBValidKey, store?: Store): Promise<void>;
export declare function clear(store?: Store): Promise<void>;
export declare function keys(store?: Store): Promise<IDBValidKey[]>;
export declare function close(store?: Store): Promise<void>;
