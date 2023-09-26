import { IPost } from "@types";
import styles from "./postDetail.module.scss";
import Author from "../author/Author";
import { montserrat } from "@app/layout";

export default async function PostDetail({title, userId, body}: Pick<IPost, "title" | "userId" | "body">) {
    return (
        <>
            <div>
                <h1 className={montserrat.className}>{title}</h1>
                <Author userId={userId}/>
                <p>{body}</p>
            </div>
        </>
    )
}
