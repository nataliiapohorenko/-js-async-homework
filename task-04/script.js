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
    btn.addEventListener("click", async ()=> {
        btn.disabled = true;
        div.textContent = "Завантаження...";

        try {
            const data = await WorkspaceData();
            div.textContent = data;
        } catch (err) {
            console.error(err);
        } finally {
            btn.disabled = false;
        }
    })
})