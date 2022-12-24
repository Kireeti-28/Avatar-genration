const basePath = "../images/";

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function showDetails(name) {
  fetch(`https://api.genderize.io/?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      let imgPath = basePath + data.gender + "/";
      if (data.gender == "male") {
        id = getRandomNum(1, 129);
        imgPath += id + ".png";
      } else {
        id = getRandomNum(1, 114);
        imgPath += id + ".png";
      }
      const img = document.querySelector("img");
      img.setAttribute("src", imgPath);
      console.log(`Gender: ${data.gender}`);
      console.log(`Probability of being ${data.gender} : ${data.probability}`);
    });
}

const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  const name = input.value;
  console.log(`Entered Name : ${name.trim()}`);
  if (name.trim().length >= 3) {
    showDetails(name.trim());
  } else {
    console.log("Please Enter Name");
  }
});
