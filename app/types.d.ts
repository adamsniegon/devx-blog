import { ComponentPropsWithoutRef } from "react";

interface IPaginatedData<T> {
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

interface IAuthor extends Pick<IPost, "userId">, ComponentPropsWithoutRef<"div"> {}