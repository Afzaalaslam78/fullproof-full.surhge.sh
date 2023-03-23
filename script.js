


function login() {
    event.preventDefault()
    let email = document.getElementById("emailUser").value;
    let password = document.getElementById("passwordUser").value;

    if (email === "admin@user.com" && password === "123456") {
        window.location.href="Home.html"
    }else{
        // alert("Sorry")
        Toastify({
            text: "invalid email or password",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }


    // document.getElementById("login").innerHTML = "";

    // alert("plaese enter your name");
}
var cities = ['faisaklabad', 'karachi', 'Lahore', 'multan', 'sheikhupura', 'Iaslamabad',]

function allcities() {
    // alert("sorry")
    document.getElementById("output").innerHTML ="";

    for (let i = 0; i <cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ')' + cities[i] + '<br>';
    }
}
function addcity() {

    let city = document.getElementById("inputText").value;

    if (city.length <3) {
        Toastify({
            text: "Please enter your city",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

          let cityFirstLetter = city.slice(0, 1).toUpperCase();

          let cityAllLetters = city.slice(1).toLowerCase();
           
          let cityWordIncapitalize = cityFirstLetter + cityAllLetters;

          let cityFound = false;

          for (let i = 0; i < cities.length; i++) {
            if (cities[1] === cityWordIncapitalize) {
                cityFound = true;
                let html = '<span style ="color: red; font-size: 20px;"' + cityWordIncapitalize + '"</span> is already in list.';
                document.getElementById("output").innerHTML = html;

            }
        }

                if (cityFound === false) {

                    cities.push(cityWordIncapitalize);
                    let html = '<span style ="color: green; font-size: 20px;"' + cityWordIncapitalize + '"</span>  had been successfully added into list.';
                    document.getElementById("output").innerHTML = html;

                }
            
          
}

}

document.getElementById("clearput").onclick = function() {
    document.getElementById("output").innerHTML = "";
}