function ValidateContact() {
    const name = document.getElementById("fullname");
    const message = document.getElementById("message");

    if (name.value === "") {
        alert("Enter your name!")
        name.focus();
        return false;
    }
    if (message.value === "") {
        alert("Enter your message!")
        message.focus();
        return false;
    }

    return true;
}

