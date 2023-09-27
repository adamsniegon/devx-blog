import { playfairDisplay } from "@layout";
import { Suspense } from "react";
import PostList from "./components/postList/PostList";
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
                        hungry and foolish_
                    </div>
                </h1>
            </div>
            <Suspense fallback={
                <div className="box">
                    <div className="container">
                        <div className={styles["postList"]}>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            }>
                <PostList />
            </Suspense>
        </>
    )
}
