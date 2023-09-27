"use client";

import { useState } from "react";
import useSWR from "swr";
import Pagination from '@mui/material/Pagination';
import PostItem from "@components/postItem/PostItem";
import { fetcher } from "@fetcher";
import { IPaginatedData, IPost } from "@types";
import styles from "./postList.module.scss";

export default function PostList() {
    const [page, setPage] = useState(1);

    const { data, error, isLoading } = useSWR(`/api/posts?page=${page}`, fetcher<IPaginatedData<IPost>>);

    if (error) return <div>failed to load</div>

    const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

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
                {data?.pagination &&
                    <Pagination count={data.pagination.pageCount} page={page} onChange={handlePageClick} />
                }
            </div>
        </div>
    )
}
