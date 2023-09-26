import styles from "./postList.module.scss";

export default async function PostList({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles["postList"]}>
            {children}
        </div>
    )
}
