// Notification Interaction

const button = document.getElementById("notifyButton");

        button.addEventListener("click", () => {
            button.textContent = "THANK YOU!";
            button.classList.add("success");

            setTimeout(() => {
                button.textContent = "NOTIFY ME";
                button.classList.remove("success");
            }, 2500);
        });


        // Countdown
        const daysElement = document.getElementById("days");

        let days = 35;

        setInterval(() => {
            if (days > 0) {
                days--;
                daysElement.textContent = days;
            }
        }, 86400000);