import Button from "@app/components/button/Button";
import PostDetail from "@components/postDetail/PostDetail";
import { IPost } from "@types";

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return posts.map((post: IPost) => ({
        id: post.id.toString()
    }));
}

export const getPost = async (id: string): Promise<IPost> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);

    return (
        <>
            <PostDetail 
                title={post.title}
                userId={post.userId}
                body={post.body}
            />
        </>
    )
}
