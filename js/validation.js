function validation() {

    var x = document.getElementById('name').value;

    if (x == 0) {
        alert("Bitte geben Sie ihren Namen an!");
        return false;
    }

    var x = document.getElementById('email').value;

    if (x == "") {
        alert('Bitte geben Sie eine Email-Adresse an!');
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x)) {
            alert('Email-Adresse ungültig!');
            return false;
        }
    }

    var x = document.getElementById('subject').value;

    if (x == 0) {
        alert("Bitte geben Sie einen Betreff an!");
        return false;
    }

    var x = document.getElementById('message').value;

    if (x == 0) {
        alert("Bitte geben Sie eine Nachricht ein!");
        return false;
    }

    document.getElementById('contactform').submit();
    return true;
}
