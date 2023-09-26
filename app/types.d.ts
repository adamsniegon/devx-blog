import { ComponentPropsWithoutRef } from "react";

interface PaginatedData<T> {
    data: T[],
    pagination: {
        total: number,
        pageCount: number,
        page: number
    }
}

interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string
}

interface IParsedQuery {
    page: number,
    limit: number
}

interface IQuery {
    page: string
}

interface IButton extends ComponentPropsWithoutRef<"a"> {
    style?: "solid" | "outline"
}

interface IUser extends Pick<IPost, "userId"> {
    name: string
}