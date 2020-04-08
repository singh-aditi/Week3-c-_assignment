export interface CRUD<T>
    {
    loadDataFunc(): void;
    generate_table(a: Array<T>): void;
    editFunc(): void;
    deleteFunc(): void;
    }