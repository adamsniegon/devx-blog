import { playfairDisplay } from "@layout";
import PostList from "@components/postList/PostList";
import styles from "./home.module.scss";

export default async function Home() {
    return (
        <>
            <div className="container stay">
                <h1 className={`${playfairDisplay.className} ${styles["headline"]}`}>
                    <div className={styles["headline__spanWrapper"]}>
                        <span className={styles["headline__span"]}></span>
                        Daily stories
                    </div> for those,<br></br>
                    who stayed&nbsp;
                    <div className={styles["headline__spanWrapper"]}>
                        <span className={styles["headline__span"]}></span>
                        hungry and foolish
                    </div>
                    &nbsp;_
                </h1>
            </div>
            <PostList />
        </>
    )
}
