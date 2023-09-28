"use client";

import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createToast } from "vercel-toast";
import "vercel-toast/css";
import styles from "./createPost.module.scss";
import { IInputs } from "@app/types";

export default function CreatePost() {
    const { data: session } = useSession();
    if (!session) redirect("/api/auth/signin");
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<IInputs>();
    const onSubmit: SubmitHandler<IInputs> = async formData => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        router.push("/");
        createToast("New post was successfully created", {
            type: "success",
            action: {
                text: "Got it",
                callback(toast) {
                    toast.destroy();
                }
            }
        })
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
