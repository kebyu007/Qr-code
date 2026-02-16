const inputL = document.querySelector("#inputl");
const btn = document.querySelector("#btn");
const img = document.querySelector("#image");

btn.addEventListener("click", () => {
  let link = inputL.value.trim();

  if (link){
    img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(link);
    link.value=""
    img.style.display="block"
  }
  else return
});
