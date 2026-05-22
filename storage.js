async function saveToLocal(data) {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem("userPosts", jsonData);
    } catch (err) {
        console.error(err);
    }
}

export default saveToLocal;