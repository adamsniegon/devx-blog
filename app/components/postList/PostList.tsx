"use client";

import useSWR from "swr";
import PostItem from "@components/postItem/PostItem";
import { fetcher } from "@fetcher";
import { IPaginatedData, IPost } from "@types";
import styles from "./postList.module.scss";
import ReactPaginate from "react-paginate";
import { Suspense, use, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter, useSearchParams } from "next/navigation";

export default function PostList() {
    // const router = useRouter();
    // const params = useSearchParams();
    // const pageFromUrl = Number(params.get("page")) > 0 ? Number(params.get("page")) : 1;
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useSWR(`/api/posts?page=${page}`, fetcher<IPaginatedData<IPost>>);


    const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
        // router.push(`/?page=${value}`)
        setPage(value);
    }

    return (
        <div className="box">
            <div className="container">
                <div className={styles["postList"]}>
                        {data && data?.data.map((post: IPost) => (
                            <PostItem
                                key={post.id}
                                id={post.id}
                                userId={post.userId}
                                title={post.title}
                                body={post.body}
                            />
                        ))}
                </div>
                {data && data.pagination &&
                    <Pagination count={data.pagination.pageCount} page={page} onChange={handlePageClick} />
                }
            </div>
        </div>
    )
}
