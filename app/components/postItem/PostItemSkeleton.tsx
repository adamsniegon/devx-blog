"use client";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "./postItem.module.scss";

export default function PostItemSkeleton({ className = undefined }: { className?: string }) {
    return (
        <div className={`${styles["skeleton__item"]} ${(className && styles[className])}`}>
            <Skeleton borderRadius={6} height={250} />
            <div className={className && styles["postItem__content"]}>
                <Skeleton width={24} height={24} circle />
                <Skeleton height={36} />
                <Skeleton count={3} height={18} />
            </div>
        </div>
    )
}
