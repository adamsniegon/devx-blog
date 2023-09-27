"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Pagination from '@mui/material/Pagination';
import PostItem from "@components/postItem/PostItem";
import { fetcher } from "@fetcher";
import { IPaginatedData, IPost } from "@types";
import styles from "./postList.module.scss";

export default function PostList() {
    const router = useRouter();
    const params = useSearchParams();
    const page = Number(params.get("page")) > 0 ? Number(params.get("page")) : 1;
    const { data, error, isLoading } = useSWR(`/api/posts?page=${page}`, fetcher<IPaginatedData<IPost>>);

    if (error) return <div>failed to load</div>
    
    const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/?page=${value}`)
    }

    return (
        <div className="box">
            <div className="container">
                <div className={styles["postList"]}>
                        {isLoading && <p>Loading...</p>}
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
