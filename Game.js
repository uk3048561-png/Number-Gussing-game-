
function btn() {
    let value1 = document.getElementById("bttn");
    let guess = Number(value1.value);
    let random = Math.floor(Math.random() * 10) + 1;

    if (value1.value === "" || guess < 1 || guess > 10) {
        Swal.fire({
            title: "⚠ Invalid Number",
            text: "Please enter a number between 1 and 10!",
            icon: "warning",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#7c3aed",
            background: "#0f172a",
            color: "#ffffff",
            customClass: {
                popup: "gaming-popup",
                title: "gaming-title",
                confirmButton: "gaming-button"
            }
        });
        return;
    }

    if (guess === random) {
        Swal.fire({
            title: "🎉 YOU WIN!",
            text: "Amazing! Your guess is correct!",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "New Game ↻",
            cancelButtonText: "Close",
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#334155",
            background: "#0f172a",
            color: "#ffffff",
            backdrop: "rgba(2, 6, 23, 0.85)",
            allowOutsideClick: false,
            customClass: {
                popup: "gaming-popup",
                title: "gaming-title",
                confirmButton: "gaming-button",
                cancelButton: "gaming-cancel"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                value1.value = "";
                value1.focus();
            }
        });
    } else {
        Swal.fire({
            title: "😈 WRONG GUESS!",
            html: `Your guess was <b style="color:#38bdf8">${guess}</b><br><br>
                   Correct answer: <b style="color:#a78bfa;font-size:25px">${random}</b>`,
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "Try Again ↻",
            cancelButtonText: "Close",
            confirmButtonColor: "#7c3aed",
            cancelButtonColor: "#334155",
            background: "#0f172a",
            color: "#ffffff",
            backdrop: "rgba(2, 6, 23, 0.85)",
            customClass: {
                popup: "gaming-popup",
                title: "gaming-title",
                confirmButton: "gaming-button",
                cancelButton: "gaming-cancel"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                value1.value = "";
                value1.focus();
            }
        });
    }
}