"use client";;

import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@fetcher";
import { IAuthor } from "@types";
import styles from "./author.module.scss";

export default function Author({ userId, className }: IAuthor) {
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/users/${userId}`, fetcher<{name: string}>);
    
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div className={`${styles["author"]} ${className}`}>
            <Image className={styles["author__image"]} src={`https://randomuser.me/api/portraits/med/men/${userId}.jpg`} alt="Profile photo" width={24} height={24} sizes="100%" />
            <label className={styles["author__name"]}>{data?.name}</label>
        </div>
    )
}
