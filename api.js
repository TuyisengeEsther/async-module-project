function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            return data;
            
        })
        .catch(function (error) {
            console.log("Failed to fetch posts:", error);
            return [];
        });
}
fetchPosts()
// export { fetchPosts };
// fetchPosts();