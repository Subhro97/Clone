let gif = document.getElementById("gif");
let post = document.querySelector(".post");
let body = document.getElementsByTagName("body")[0];
let APIKEY = "lmxTRDTVLOEAEhIEvIceoPW6dVY8cupL";

let flag = 1;

const addGif = () => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=anime`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let outerdiv = document.createElement("div");
        outerdiv.style.backgroundColor = "white";
        let input = document.createElement("input");
        input.placeholder ="Search GIFs across apps..."
        input.width = "3rem";
        input.height = "1.5rem";
        outerdiv.appendChild(input);
        result.data.map((gif) => {
          let img = document.createElement("img");
          img.src = gif.images.fixed_height.url;
          img.alt = gif.title;
          let div = document.createElement("div");
          img.style.height = "10rem";
          img.style.width = "10rem";
          div.appendChild(img);
          outerdiv.appendChild(div);
        });

        outerdiv.classList.add(".out");

        body.appendChild(outerdiv);
        flag = 0;
        // document.querySelector("#search").value = "";
      });
};

gif.addEventListener("click", addGif);
