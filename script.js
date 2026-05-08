// আপনার GitHub ইউজারনেম এখানে লিখুন
const githubUsername = "nirobroy0551"; 

window.addEventListener("load", () => {
    // লোডার সরিয়ে ফেলা
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);

    // GitHub থেকে প্রোফাইল পিকচার সংগ্রহ করা
    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => response.json())
        .then(data => {
            const imgElement = document.getElementById("github-avatar");
            // ছবি সেট করা, যদি না পায় তবে একটি ডিফল্ট ছবি দেখাবে
            imgElement.src = data.avatar_url || "https://via.placeholder.com/150";
        })
        .catch(err => {
            console.error("GitHub image load failed", err);
            document.getElementById("github-avatar").src = "https://via.placeholder.com/150";
        });
});
