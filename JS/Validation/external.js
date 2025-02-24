function valid() {
    let valid = true;

    let fname = document.getElementById("fname").value.trim();
    if (!/^[A-Za-z]{1,30}$/.test(fname)) {
        alert("First name must contain only letters and be up to 30 characters.");
        valid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if (!/^[A-Za-z]{1,30}$/.test(lname)) {
        alert("Last name must contain only letters and be up to 30 characters.");
        valid = false;
    }

    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Enter a valid email address.");
        valid = false;
    }

    let nbr = document.getElementById("nbr").value.trim();
    if (isNaN(nbr) || nbr.length !== 10) {
        alert("Enter a valid 10-digit mobile number.");
        valid = false;
    }

    let gender = document.querySelector('input[name="gen"]:checked');
    if (!gender) {
        alert("Select your gender.");
        valid = false;
    }

    let address = document.getElementById("address").value.trim();
    if (address.length < 5) {
        alert("Enter a valid address (at least 5 characters).");
        valid = false;
    }

    let city = document.getElementById("city").value.trim();
    if (!/^[A-Za-z\s]{1,30}$/.test(city)) {
        alert("Enter a valid city name (letters only, up to 30 characters).");
        valid = false;
    }

    let pin = document.getElementById("pin").value.trim();
    if (isNaN(pin) || pin.length !== 6) {
        alert("Enter a valid 6-digit PIN code.");
        valid = false;
    }

    let state = document.getElementById("state").value.trim();
    if (!/^[A-Za-z\s]{1,30}$/.test(state)) {
        alert("Enter a valid state name (letters only, up to 30 characters).");
        valid = false;
    }

    let course = document.querySelector('input[name="courses"]:checked');
    if (!course) {
        alert("Select a course.");
        valid = false;
    }

    return valid;
}
