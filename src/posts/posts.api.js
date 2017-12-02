const PostsApi = () => {
    let postBaseUrl = "https://www.vivadecora.com.br/revista/wp-json/wp/v2/posts/";

    const getSinglePostById = (postId) => {
        return fetch(`${postBaseUrl}${postId}`).then(response => response.json());
    }

    return {
        getSinglePostById
    }
}

export default PostsApi;