const fetchSinglePost = async (id) => {
    // incremental static regeneration 
    await new Promise(resolve => setTimeout(resolve , 3000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/commentsaaaa`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params //id is the name of the folder
    const comments = await fetchSinglePost(id)
    return (
        <ul style={{background: '#eee',  fontSize: '1rem'}}>
            {
                comments.map(comment =>
                    <li key={comment.id} >
                        <h2>{comment.name}</h2>
                        <p> {comment.body}</p>
                    </li>)
            }
        </ul>
    );
}


