import { montserrat } from "@layout";
import Link from "next/link";
import { IButton } from "@types";
import styles from "./button.module.scss";

export default async function Button({
    children,
    href,
    style = "solid",
    className,
    ...rest
}: IButton) {
    return (
        <Link
            href={href ?? ""}
            className={`
                ${montserrat.className}
                ${styles["button"]}
                ${styles["button--" + style]}
                ${className ?? ""}
            `}
            {...rest}
        >{children}</Link>
    )
}
