import { IPost } from "@types";
import PostItem from "./components/postItem/PostItem";
import PostList from "./components/postList/PostList";
import Image from "next/image";

async function getData(): Promise<IPost[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {
    const posts = await getData();

    return (
        <>
            <PostList>
                {posts.map((post: IPost) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </PostList>
        </>
    )
}
