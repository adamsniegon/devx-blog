"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Pagination from '@mui/material/Pagination';
import PostItem from "@components/postItem/PostItem";
import { fetcher } from "@utils";
import { IPaginatedData, IPost } from "@types";
import styles from "./postList.module.scss";
import PostItemSkeleton from "../postItem/PostItemSkeleton";

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
                {isLoading && <PostItemSkeleton className="postItem__main" />}
                {data &&
                    <PostItem
                        key={data.data[0].id}
                        className="postItem__main"
                        id={data.data[0].id}
                        userId={data.data[0].userId}
                        title={data.data[0].title}
                        body={data.data[0].body}
                    />
                }
                <div className={styles["postList"]}>
                    {isLoading &&
                        <>
                            {Array(9).fill(true).map((_, index) => <PostItemSkeleton key={index} />)}
                        </>
                    }
                    {data && data?.data.map((post: IPost, index: number) => (
                        index > 0 &&
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
                    <Pagination className={styles["postList__pagination"]} count={data.pagination.pageCount} page={page} onChange={handlePageClick} />
                }
            </div>
        </div>
    )
}
