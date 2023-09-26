import { IPost } from "@types";

export default async function PostDetail({title, userId, body}: Pick<IPost, "title" | "userId" | "body">) {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <label>{userId}</label>
                <p>{body}</p>
            </div>
        </>
    )
}
