import Link from "next/link"

const fetchSinglePost = (id) => {
    // incremental static regeneration 
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params , children }) {
    const { id } = params //id is the name of the folder
    const post = await fetchSinglePost(id)
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}> Ver comentarios </Link>
            {children}
        </article>
    );
}
