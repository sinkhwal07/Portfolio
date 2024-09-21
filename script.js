document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Student", "Tech Enthusiast", "Learner"];
    let currentRole = 0;

    const roleElements = [
        document.getElementById("roleChange"),
        document.getElementById("roleChange2"),
        document.getElementById("roleChange3"),
    ];

    function changeRole() {
        // Hide the current role
        if (currentRole > 0) {
            roleElements[currentRole - 1].classList.add("hidden");
        }

        // Show the next role
        if (currentRole < roles.length) {
            roleElements[currentRole].classList.remove("hidden");
            roleElements[currentRole].style.animation = "fadeIn 1s forwards"; // Add animation
            currentRole++;
        } else {
            currentRole = 0; // Reset after showing all
            roleElements.forEach(el => el.classList.add("hidden")); // Hide all
            roleElements[0].classList.remove("hidden"); // Show the first role
        }
    }

    // Show the first role after a short delay
    setTimeout(() => {
        roleElements[0].classList.remove("hidden");
        setInterval(changeRole, 2000); // Change role every 2 seconds
    }, 1000);
});
