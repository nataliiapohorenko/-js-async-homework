function WorkspaceData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані отримано!");
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("data-container");
    const btn = div.nextElementSibling;
    btn.addEventListener("click", ()=> {
        btn.disabled = true;
        div.textContent = "Завантаження...";

        WorkspaceData()
            .then((data) => {
                div.textContent = data;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                btn.disabled = false;
            });
    })
})