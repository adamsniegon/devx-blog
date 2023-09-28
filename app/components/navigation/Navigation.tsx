"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@components/button/Button";
import styles from "./navigation.module.scss";

export default function Navigation() {
    const { data: session } = useSession();

    return (
        <nav className={styles["navigation"]}>
            <Link href="/">
                <Image className={styles["navigation__logo"]} src="/geekblog-logo.svg" alt="GeekBlog logo" width={109} height={24} />
            </Link>
            <div className={styles["navigation__userControl"]}>
                {!session ?
                    <Button onClick={() => signIn()}>Log in</Button>
                    :
                    <>
                        <Button href="/posts/create">Create post</Button>
                        <Button onClick={() => signOut()} style="outline">Log out</Button>
                    </>
                }
            </div>
        </nav>
    )
}
