import parser from "@parser";
import { IQuery, IPaginatedData } from "@types";

export default function paginate<T>(data: T[], total: number, query: IQuery): IPaginatedData<T> {
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