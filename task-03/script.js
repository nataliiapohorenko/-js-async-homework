function WorkspaceResource1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ресурс 1 готовий");
        }, 1000);
    });
}

function WorkspaceResource2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ресурс 2 готовий");
        }, 2000);
    });
}

function WorkspaceResource3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ресурс 3 готовий");
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("results");
    const btn = div.nextElementSibling;
    btn.addEventListener("click", ()=> {
        btn.disabled = true;
        div.textContent = "Завантаження...";

        Promise.all([WorkspaceResource1(), WorkspaceResource2(), WorkspaceResource3()])
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