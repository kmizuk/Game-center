"use strict";

{
  class Panel {
    constructor() {
      //全体のクラスを定義(要素を生成)
      const section = document.createElement("section");
      section.classList.add("panel");
      //sectionタグを作ってpanelクラスを追加
      // this.panel.classList.add("spin");

      this.img = document.createElement("img");
      this.img.src = this.getRandomImage();
      //thisはPanel
      this.TimeOutId = undefined;

      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop");
      this.stop.addEventListener("click", () => {
        clearTimeout(this.TimeOutId);
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector("main");
      main.appendChild(section);
    } //constructorはここまで
    getRandomImage() {
      //写真をランダムに表示する関数の定義
      const images = [
        "Slot Machine/img/seven.png",
        "Slot Machine/img/bell.png",
        "Slot Machine/img/cherry.png",
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.TimeOutId = setTimeout(() => {
        this.spin();
      }, 50);
    }
  } //Panelはここまで

  const panels = [new Panel(), new Panel(), new Panel()];

  const spin = document.getElementById("spin");
  spin.addEventListener("click", () => {
    //spinにonClick
    panels.forEach((panel) => {
      //Panelを１つずつ展開
      panel.spin(); //panelクラスのspinメソッド発動！
    });
  });
}

// {
//   class Panel {
//     constructor() {
//       const section = document.createElement("section");
//       section.classList.add("panel");

//       this.img = document.createElement("img");
//       this.img.src = "img/seven.png";

//       this.stop = document.createElement("div");
//       this.stop.textContent = "STOP";
//       this.stop.classList.add("stop");

//       section.appendChild("img");
//       section.appendChild("stop");

//       const section = document.querySelector("section");
//       section.appendChild("section");
//   }
// }
