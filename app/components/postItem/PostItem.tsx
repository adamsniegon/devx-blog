"use client";

import Link from "next/link";
import Image from "next/image";
import Author from "../author/Author";
import { IPost } from "@types";
import styles from "./postItem.module.scss";

export default function PostItem({ id, userId, title, body, className = undefined }: Pick<IPost, "id" | "userId" | "title" | "body"> & {className?: string}) {
    const postLink = `/posts/${id}`;

    return (
        <div className={className && styles[className]}>
            <Link className={styles["postItem__imageWrapper"]} href={postLink}>
                <Image className={styles["postItem__image"]} src={`https://picsum.photos/id/${id}/600/600`} alt="Article preview image" fill sizes="100%" />
            </Link>
            <div className={className && styles["postItem__content"]}>
                <Author userId={userId} />
                <Link className={styles["postItem__title"]} href={postLink}><h2>{title.length > 50 ? title.substring(0, 50) + "..." : title}</h2></Link>
                <p className={styles["postItem__body"]}>{body.length > 120 ? body.substring(0, 120) + "..." : body}</p>
            </div>
        </div>
    )
}
