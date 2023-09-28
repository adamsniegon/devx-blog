import { NextResponse } from 'next/server';
import paginate from '@paginate';
import { IPost } from '@types';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json() as IPost[];
        if (JSON.stringify(data) === "{}") throw Error("Bad request");
        return NextResponse.json(paginate<IPost>(data as IPost[], data.length, { page: page ?? "" }));
    } catch (error) {
        return NextResponse.json({ message: "Bad request" }, { status: 400, statusText: "Bad request" });
    }
}
