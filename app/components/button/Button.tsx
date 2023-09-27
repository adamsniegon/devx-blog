"use client";

import Link from "next/link";
import { IButton } from "@types";
import styles from "./button.module.scss";
import { useRouter } from "next/navigation";

export default function Button({
    children,
    href,
    style = "solid",
    className,
    back = false,
    ...rest
}: IButton) {
    const router = useRouter();
    return (
        <Link
            onClick={() => back ? router.back() : undefined}
            href={href ?? ""}
            className={`
                ${styles["button"]}
                ${styles["button--" + style]}
                ${className ?? ""}
            `}
            {...rest}
        >{children}</Link>
    )
}
