import { IPost } from "@types";
import PostItem from "./components/postItem/PostItem";
import PostList from "./components/postList/PostList";
import styles from "./home.module.scss";
import { playfairDisplay } from "./layout";

async function getData(): Promise<IPost[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {
    const posts = await getData();

    return (
        <>
            <h1 className={`${playfairDisplay.className} ${styles["headline"]}`}>
                <div className={styles["headline__spanWrapper"]}>
                    <span className={styles["headline__span"]}></span>
                    Daily stories
                </div> for those,<br></br>
                who stayed&nbsp;
                <div className={styles["headline__spanWrapper"]}>
                    <span className={styles["headline__span"]}></span>
                    hungry and foolish_
                </div>
            </h1>
            <PostList>
                {posts.map((post: IPost) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </PostList>
        </>
    )
}
