"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Button from "@components/button/Button";
import styles from "./navigation.module.scss";

export default function Navigation() {
    const { data: session } = useSession();
    if (!session) redirect("/api/auth/signin");

    return (
        <div>
            <div className={`container`}>
                <h1>Create post</h1>
            </div>
            <div className="box">
                <div></div>
                <Button>Create post</Button>
            </div>
        </div>
    )
}
