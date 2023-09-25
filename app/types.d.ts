export interface PaginatedData<T> {
    data: T[],
    pagination: {
        total: number,
        pageCount: number,
        page: number
    }
}

export interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string
}

export interface IParsedQuery {
    page: number,
    limit: number
}

export interface IQuery {
    page: string
}