import LikeButton from "./LikeButton"
import Link from "next/link"

const fetchPost = () => {
    return fetch(
        'https://jsonplaceholder.typicode.com/posts',
        // { cache: 'no-store' },
        { next: { revalidate: 60 } }
    )
        .then(res => res.json())
}

export default async function ListOfPost() {
    const posts = await fetchPost()
    return (
        <section>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                        <h2 style={{ color: '#09f' }}>{post.title}</h2>
                    </Link>
                        <p>{post.body}</p>
                        <LikeButton id={post.id} />
                    
                </article>
            ))}
        </section>
    )
}
