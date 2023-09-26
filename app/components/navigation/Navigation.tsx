import Image from "next/image";
import Link from "next/link";
import Button from "@components/button/Button";
import styles from "./navigation.module.scss";

export default async function Navigation() {
    return (
        <nav className={styles["navigation"]}>
            <Link href="/">
                <Image className={styles["navigation__logo"]} src="/geekblog-logo.svg" alt="GeekBlog logo" width={109} height={24} />
            </Link>
            <div className={styles["navigation__userControl"]}>
                <Button style="outline">Log in</Button>
                <Button>Register</Button>
            </div>
        </nav>
    )
}
