function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Failed to fetch posts:", error);
            return [];
        });
}

export { fetchPosts };