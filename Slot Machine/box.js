`use strict`;

const num = 5;
const winner = Math.floor(Math.random() * num);

for (let i = 0; i < num; i++) {
  const div = document.createElement("div");

  div.classList.add("box");

  div.addEventListener("click", () => {
    if (i === winner) {
      div.textContent = "Out";
      div.classList.add("Out");
    } else {
      div.textContent = "Safe";
      div.classList.add("Safe");
    }
  });

  document.body.appendChild(div);
}
