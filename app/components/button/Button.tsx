import { Montserrat } from "next/font/google";
import Link from "next/link";
import { IButton } from "@types";
import styles from "./button.module.scss";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

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
                ${className}
            `}
            {...rest}
        >{children}</Link>
    )
}
