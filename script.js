let far = document.getElementById("option-1");
let cel = document.getElementById("option-2");
let label = document.getElementById("label1");
let unos = document.getElementById("unos");
let textBox = document.getElementById("textbox");
let dugme = document.getElementById("pretvori");

far.addEventListener("change", () => {
  if (far.checked) {
    label.textContent = "Unesi temperaturu u F";
  } else if (cel.checked) {
    label.textContent = "Unesi temperaturu u C";
  }
});

cel.addEventListener("change", () => {
  if (far.checked) {
    label.textContent = "Unesi temperaturu u F";
  } else if (cel.checked) {
    label.textContent = "Unesi temperaturu u C";
    dugme.setAttribute("onclick", "CuF();");
  }
});

function CuF() {
  let unosVal = parseInt(unos.value);
  textBox.innerHTML = "";
  textBox.innerHTML = `Data temperatura od ${unosVal}C je ${
    (unosVal * 9) / 5 + 32
  }F `;
}
