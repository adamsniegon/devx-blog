import { IParsedQuery, IQuery } from "@types";

export default function parser (query: IQuery): IParsedQuery {
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