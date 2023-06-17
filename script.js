let far = document.getElementById("option-1");
let cel = document.getElementById("option-2");
let label = document.getElementById("label1");
let unos = document.getElementById("unos");
let textBox = document.getElementById("textbox");
let dugme = document.getElementById("pretvori");

far.checked = true;
if (far.checked) {
  textBox.textContent = "";
    label.textContent = "Unesi temperaturu u °F";
    dugme.setAttribute("onclick", "FuC();");
  }

far.addEventListener("change", () => {
  textBox.textContent = " ";
  unos.value = "";
  if (far.checked) {
    label.textContent = "Unesi temperaturu u °F";
    dugme.setAttribute("onclick", "FuC();");

  } else if (cel.checked) {
    label.textContent = "Unesi temperaturu u °C";
    dugme.setAttribute("onclick", "CuF();");
  }
});

cel.addEventListener("change", () => {
  textBox.textContent = " ";
  unos.value = "";
  if (far.checked) {
    label.textContent = "Unesi temperaturu u °F";
  } else if (cel.checked) {
    label.textContent = "Unesi temperaturu u °C";
    dugme.setAttribute("onclick", "CuF();");
  }
});

function CuF() {
  let unosVal = parseInt(unos.value);
  textBox.innerHTML = " ";
  textBox.innerHTML = `Data temperatura od ${unosVal}°C je ${
    ((unosVal * 9) / 5 + 32).toFixed(2)
  }°F `;
}
function FuC(){
  let unosVal = parseInt(unos.value);
  textBox.innerHTML = " ";
  textBox.innerHTML = `Data temperatura od ${unosVal}°F je ${
    ((unosVal-32)*5/9).toFixed(2)
  }°C `;
}

