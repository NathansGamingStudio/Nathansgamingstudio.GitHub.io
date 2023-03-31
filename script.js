let output = document.getElementById("output");

function insert(value) {
  if (output.value == "0") {
    output.value = "";
  }
  output.value += value;
}

function clearOutput() {
  output.value = "0";
}

function backspace() {
  output.value = output.value.slice(0, -1);
  if (output.value == "") {
    output.value = "0";
  }
}

function calculate() {
  output.value = eval(output.value);
}
function toggleMode() {
  let calculator = document.querySelector(".calculator");
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll("button");
  let modeToggle = document.getElementById("mode-toggle");

  calculator.classList.toggle("dark-mode");
  screen.classList.toggle("dark-mode");
  buttons.forEach(button => button.classList.toggle("dark-mode"));
  
  if (calculator.classList.contains("dark-mode")) {
    modeToggle.innerHTML = "Light Mode";
    modeToggle.classList.add("dark-mode");
  } else {
    modeToggle.innerHTML = "Dark Mode";
    modeToggle.classList.remove("dark-mode");
  }
}

function acceptCookies() {
  document.cookie = "cookie-consent=accepted; max-age=31536000; path=/";
  document.getElementById("cookie-consent").style.display = "none";
}

function checkCookies() {
  if (document.cookie.indexOf("cookie-consent=accepted") === -1) {
    document.getElementById("cookie-consent").style.display = "block";
  }
}

checkCookies();


