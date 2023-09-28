import { IParsedQuery, IQuery, IPaginatedData } from "@types";

export function parser (query: IQuery): IParsedQuery {
    const parsedQuery: IParsedQuery = {
        page: 1,
        limit: 10
    }

    if (!isNaN(Number(query.page)) && Number(query.page) > 0) {
        parsedQuery.page = Number(query.page);
    }

    if (!isNaN(Number(process.env.PAGE_LIMIT)) && Number(process.env.PAGE_LIMIT) > 0) {
        parsedQuery.limit = Number(process.env.PAGE_LIMIT);
    }
    
    return parsedQuery;
}

export function paginate<T>(data: T[], total: number, query: IQuery): IPaginatedData<T> {
    const parsedQuery = parser(query);
    const startIndex = (parsedQuery.page - 1) * parsedQuery.limit;
    const endIndex = parsedQuery.page * parsedQuery.limit;
    const paginatedData = data.slice(startIndex, endIndex);
    const pageCount: number = Math.ceil(total / parsedQuery.limit);
    return {
        data: paginatedData,
        pagination: {
            total: total,
            pageCount: pageCount,
            page: parsedQuery.page
        }
    };
}

export const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> => fetch(...args).then((res) => res.json());