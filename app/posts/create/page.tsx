"use client";

import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import { fetcher } from "@fetcher";
import styles from "./createPost.module.scss";
import { IPaginatedData, IPost } from "@app/types";

type Inputs = {
    title: string,
    body: string,
};

export default function CreatePost() {
    const { data: session } = useSession();
    if (!session) redirect("/api/auth/signin");
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async formData => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const newPost = await response.json() as IPost;
        router.push("/");
    }

    return (
        <div>
            <div className={`container`}>
                <h1>Create post</h1>
            </div>
            <div className="box">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]} method="POST">

                        <div className={styles["form__group"]}>
                            <label>Title</label>
                            <input className={`${styles["form__input"]} ${styles["form__input--title"]}`} {...register("title", { required: true })} />
                            {errors.title && <span className={styles["form__error"]}>Toto pole je povinné</span>}
                        </div>
                        <div className={styles["form__group"]}>
                            <label>Body</label>
                            <textarea className={`${styles["form__input"]} ${styles["form__input--body"]}`} {...register("body", { required: true })} />
                            {errors.body && <span className={styles["form__error"]}>Toto pole je povinné</span>}
                        </div>
                        <button className={styles["form__button"]} type="submit">Create post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
