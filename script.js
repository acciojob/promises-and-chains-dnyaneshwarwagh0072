document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);

    if (!name || isNaN(age)) {
        alert("Please fill out both fields.");
        return;
    }

    const validateAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    validateAge.then((message) => {
        alert(message);
    })
        .catch((error) => {
            alert(error);
        });
});
