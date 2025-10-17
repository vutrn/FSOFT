const theImages = [
  {
    src: " https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },

  {
    src: " https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },

  {
    src: " https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },

  {
    src: " https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },
  {
    src: " https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },
  {
    src: " https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 ",
    width: "300",
    height: "300",
  },
];

const btn = document.querySelector('#btn')
const imgDiv = document.querySelector('.image')
const img = document.createElement("img")
imgDiv.appendChild(img)
btn.addEventListener('click', getRandomImage)

function getRandomImage () {
  const imgDivs = document.querySelectorAll('.image');

  imgDivs.forEach(div => {
    const index = Math.floor(Math.random() * theImages.length);
    div.innerHTML = "";
    const img = document.createElement("img");
    img.src = theImages[index].src;
    img.width = theImages[index].width;
    img.height = theImages[index].height;
    div.appendChild(img);
    console.log(index);
  });
}