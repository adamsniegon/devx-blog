import { Suspense } from "react";
import { montserrat } from "@layout";
import Image from "next/image";
import Author from "@components/author/Author";
import Button from "@components/button/Button";
import { IPost } from "@types";
import styles from "./postDetail.module.scss";

export default async function PostDetail({title, userId, body}: Pick<IPost, "title" | "userId" | "body">) {
    return (
        <>
            <div className="container">
                <Suspense>
                    <Button back style="outline"><Image src="/arrow-left.svg" alt="Icon back" width={24} height={24} />Back</Button>
                </Suspense>
                <h1 className={`${montserrat.className} ${styles["postDetail__title"]}`}>{title}</h1>
                <Author className={styles["postDetail__author"]} userId={userId}/>
            </div>
            <div className="box">
                <div className="container">
                    <p>{body}</p>
                </div>
            </div>
        </>
    )
}
