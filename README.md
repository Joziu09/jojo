<!DOCTYPE html>
<html lang="hun">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jelszó</title>
    <style>
        body {
            background-color: #2b2b2b;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
        .jelpan {
            width: 200px;
            height: 150px;
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -75px;
            margin-left: -100px;
            border-radius: 10px;
        }
        .nev {
            text-align: center;
            font-size: large;
        }
        #passwordFrom {
            position: absolute;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="jelpan">
        <p class="nev">Mindegy nekem, játékok</p>
        <hr>
        <!-- Form javítva, from -> form -->
        <form id="passwordFrom" onsubmit="return false;">
            Jelszó: 
            <input type="password" id="password">
            <!-- Button típus módosítva: type="button" -->
            <button type="button" onclick="checkPassword()">Belépés</button>
        </form>
    </div>

<script>
    // Helyes jelszó
    const correctPassword = "Kajcia";

    function checkPassword() {
        const inputField = document.getElementById("password");  // Helyesen hivatkozva
        const enteredPassword = inputField.value;

        if (enteredPassword === correctPassword) {
            // Helyes jelszó esetén jojo.html
            window.location.href = "jojo.html";
        } else {
            // Helytelen jelszó esetén üzenet és mező törlése
            alert("Segitek meg sugom hogy a jelszó (Kajcia).");
            inputField.value = ""; // Mező kiüritése
        }
    }
</script>
</body>
</html>
