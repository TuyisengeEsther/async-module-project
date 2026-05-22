async function saveToLocal(data) {
    try {
        const jsonData = JSON.stringify(data);

        localStorage.setItem("userPosts", jsonData);

        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

export default saveToLocal;