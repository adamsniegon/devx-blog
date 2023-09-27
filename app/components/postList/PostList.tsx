"use client";

import useSWR from "swr";
import PostItem from "@components/postItem/PostItem";
import { fetcher } from "@fetcher";
import { IPaginatedData, IPost } from "@types";
import styles from "./postList.module.scss";

export default function PostList() {
    const { data, error, isLoading } = useSWR("/api/posts", fetcher<IPaginatedData<IPost>>);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div className="box">
            <div className="container">
                <div className={styles["postList"]}>
                    <p>Loading...</p>
                </div>
            </div>
        </div>;

    return (
        <div className="box">
            <div className="container">
                <div className={styles["postList"]}>
                    {data?.data.map((post: IPost) => (
                        <PostItem
                            key={post.id}
                            id={post.id}
                            userId={post.userId}
                            title={post.title}
                            body={post.body}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
