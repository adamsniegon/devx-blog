import Image from "next/image";
import { IAuthor } from "@types";
import styles from "./author.module.scss";

export const getUser = async (id: number): Promise<{name: string}> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Author({ userId, className }: IAuthor) {
    const user = await getUser(userId);

    return (
        <div className={`${styles["author"]} ${className}`}>
            <Image className={styles["author__image"]} src={`https://randomuser.me/api/portraits/med/men/${userId}.jpg`} alt="Profile photo" width={24} height={24} sizes="100%" />
            <label className={styles["author__name"]}>{user.name}</label>
        </div>
    )
}
