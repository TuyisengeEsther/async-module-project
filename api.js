function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log("Failed to fetch posts:", error);
            return [];
        });
}

export { fetchPosts };