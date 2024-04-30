const isActive = false

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadImageRandomly(elementId, imageUrl, secondImageUrl) {
  let selectedImageUrl = "";

  if(imageUrl === 'empty'){
    selectedImageUrl = secondImageUrl
  }else if(secondImageUrl === 'empty'){
    selectedImageUrl = imageUrl
  }else {
    const randomIndex = getRandomInt(0, 1);
    selectedImageUrl = randomIndex === 0 ? imageUrl : secondImageUrl;
  }
  document.getElementById(elementId).setAttribute("src", selectedImageUrl);
}

document.querySelector("#li1").style.backgroundColor = "Black";
document.querySelector("#li1").querySelector("a").style.color = "white";
document.querySelector("#li2").style.backgroundColor = "white";
document.querySelector("#li2").querySelector("a").style.color = "black";
document.querySelector("#li3").style.backgroundColor = "white";
document.querySelector("#li3").querySelector("a").style.color = "black";

const mensData = async () => {
  document.querySelector("#li1").style.backgroundColor = "Black";
  document.querySelector("#li1").querySelector("a").style.color = "white";
  document.querySelector("#li2").style.backgroundColor = "white";
  document.querySelector("#li2").querySelector("a").style.color = "black";
  document.querySelector("#li3").style.backgroundColor = "white";
  document.querySelector("#li3").querySelector("a").style.color = "black";

  const data = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  const jsonData = await data.json();
  const [menCategory, , ] = jsonData.categories;
  const menProducts = menCategory.category_products; 
  loadImageRandomly(
    "Image1",
    menProducts[0].image,
    menProducts[0].second_image
  );
  document.getElementById("prod1Desc").innerText = menProducts[0].title;
  document.getElementById("price1").innerText = "Rs "+menProducts[0].price+" ";
  document.getElementById("comp1").innerText = menProducts[0].compare_at_price;
  document.getElementById("offer1").innerText = "("+Math.trunc(
    ((menProducts[0].compare_at_price - menProducts[0].price) /
      menProducts[0].compare_at_price) *
      100
  )+"% Off)"
  document.getElementById("badge1").style.visibility = "visible"
  document.getElementById("badge1").innerText = menProducts[0].badge_text;
  document.getElementById("vendor1").innerText = menProducts[0].vendor;
  
  loadImageRandomly(
    "Image2",
    menProducts[1].image,
    menProducts[1].second_image
  );
  document.getElementById("prod2Desc").innerText = menProducts[1].title;
  document.getElementById("price2").innerText =
  "Rs " + menProducts[1].price + " ";
  document.getElementById("comp2").innerText = menProducts[1].compare_at_price;
  document.getElementById("offer2").innerText =
  "(" +
  Math.trunc(
    ((menProducts[1].compare_at_price - menProducts[1].price) /
    menProducts[1].compare_at_price) *
    100
  ) +
  "% Off)";
  document.getElementById("badge2").innerText = menProducts[1].badge_text;
  document.getElementById("vendor2").innerText = menProducts[1].vendor;
  

  loadImageRandomly(
    "Image3",
    menProducts[2].image,
    menProducts[2].second_image
  );
  document.getElementById("prod3Desc").innerText = menProducts[2].title;
  document.getElementById("price3").innerText =
    "Rs " + menProducts[2].price + " ";
  document.getElementById("comp3").innerText = menProducts[2].compare_at_price;
  document.getElementById("offer3").innerText =
    "(" +
    Math.trunc(
      ((menProducts[2].compare_at_price - menProducts[2].price) /
        menProducts[2].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge3").style.visibility = "visible";
    document.getElementById("badge3").innerText = menProducts[2].badge_text
    document.getElementById("vendor3").innerText = menProducts[2].vendor;

  loadImageRandomly(
    "Image4",
    menProducts[3].image,
    menProducts[3].second_image
  );
  document.getElementById("prod4Desc").innerText = menProducts[3].title;
  document.getElementById("price4").innerText =
    "Rs " + menProducts[3].price + " ";
  document.getElementById("comp4").innerText = menProducts[3].compare_at_price;
  document.getElementById("offer4").innerText =
    "(" +
    Math.trunc(
      ((menProducts[3].compare_at_price - menProducts[3].price) /
        menProducts[3].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge4").style.visibility = "visible";
    document.getElementById("badge4").innerText = menProducts[3].badge_text;
    document.getElementById("vendor4").innerText = menProducts[3].vendor;
};

async function womenData() {
  document.querySelector("#li1").style.backgroundColor = "white";
  document.querySelector("#li1").querySelector("a").style.color = "black";
  document.querySelector("#li2").style.backgroundColor = "black";
  document.querySelector("#li2").querySelector("a").style.color = "white";
  document.querySelector("#li3").style.backgroundColor = "white";
  document.querySelector("#li3").querySelector("a").style.color = "black";

  const data = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  const jsonData = await data.json();
  const [, womenCategory,] = jsonData.categories;

  const womenProducts = womenCategory.category_products;

  loadImageRandomly(
    "Image1",
    womenProducts[0].image,
    womenProducts[0].second_image
  );
  document.getElementById("prod1Desc").innerText = womenProducts[0].title;
  document.getElementById("price1").innerText =
    "Rs " + womenProducts[0].price + " ";
  document.getElementById("comp1").innerText = womenProducts[0].compare_at_price;
  document.getElementById("offer1").innerText =
    "(" +
    Math.trunc(
      ((womenProducts[0].compare_at_price - womenProducts[0].price) /
        womenProducts[0].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge1").style.visibility = "visible";
    document.getElementById("badge1").innerText = womenProducts[0].badge_text;
    document.getElementById("vendor1").innerText = womenProducts[0].vendor;

  loadImageRandomly(
    "Image2",
    womenProducts[1].image,
    womenProducts[1].second_image
  );
  document.getElementById("prod2Desc").innerText = womenProducts[1].title;
  document.getElementById("price2").innerText =
    "Rs " + womenProducts[1].price + " ";
  document.getElementById("comp2").innerText = womenProducts[1].compare_at_price;
  document.getElementById("offer2").innerText =
    "(" +
    Math.trunc(
      ((womenProducts[1].compare_at_price - womenProducts[1].price) /
        womenProducts[1].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge2").innerText = womenProducts[1].badge_text;
    document.getElementById("vendor2").innerText = womenProducts[1].vendor;
    
  loadImageRandomly(
    "Image3",
    womenProducts[2].image,
    womenProducts[2].second_image
  );
  document.getElementById("prod3Desc").innerText = womenProducts[2].title;
  document.getElementById("price3").innerText =
    "Rs " + womenProducts[2].price + " ";
  document.getElementById("comp3").innerText = womenProducts[2].compare_at_price;
  document.getElementById("offer3").innerText =
    "(" +
    Math.trunc(
      ((womenProducts[2].compare_at_price - womenProducts[2].price) /
        womenProducts[2].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge3").style.visibility = "visible";
    document.getElementById("badge3").innerText = womenProducts[2].badge_text;
    document.getElementById("vendor3").innerText = womenProducts[2].vendor;

  loadImageRandomly(
    "Image4",
    womenProducts[3].image,
    womenProducts[3].second_image
  );
  document.getElementById("prod4Desc").innerText = womenProducts[3].title;
  document.getElementById("price4").innerText =
    "Rs " + womenProducts[3].price + " ";
  document.getElementById("comp4").innerText = womenProducts[3].compare_at_price;
  document.getElementById("offer4").innerText =
    "(" +
    Math.trunc(
      ((womenProducts[3].compare_at_price - womenProducts[3].price) /
        womenProducts[3].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge4").style.visibility = "visible";
    document.getElementById("badge4").innerText = womenProducts[3].badge_text;
    document.getElementById("vendor4").innerText = womenProducts[3].vendor;
}

async function kidsData() {
    document.querySelector("#li1").style.backgroundColor = "white";
    document.querySelector("#li1").querySelector('a').style.color= "black";
    document.querySelector("#li2").style.backgroundColor = "white";
    document.querySelector("#li2").querySelector("a").style.color = "black";
    document.querySelector("#li3").style.backgroundColor = "black";
    document.querySelector("#li3").querySelector("a").style.color = "white";

  const data = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  const jsonData = await data.json();
  const [, , kidsCategory] = jsonData.categories;

  const kidsProducts = kidsCategory.category_products;

  loadImageRandomly(
    "Image1",
    kidsProducts[0].image,
    kidsProducts[0].second_image
  );
  document.getElementById("prod1Desc").innerText = kidsProducts[0].title;
  document.getElementById("price1").innerText =
    "Rs " + kidsProducts[0].price + " ";
  document.getElementById("comp1").innerText =
    kidsProducts[0].compare_at_price;
  document.getElementById("offer1").innerText =
    "(" +
    Math.trunc(
      ((kidsProducts[0].compare_at_price - kidsProducts[0].price) /
        kidsProducts[0].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge1").style.visibility = "visible";
    document.getElementById("badge1").innerText = kidsProducts[0].badge_text;
    document.getElementById("vendor1").innerText = kidsProducts[0].vendor;

  loadImageRandomly(
    "Image2",
    kidsProducts[1].image,
    kidsProducts[1].second_image
  );
  document.getElementById("prod2Desc").innerText = kidsProducts[1].title;
  document.getElementById("price2").innerText =
    "Rs " + kidsProducts[1].price + " ";
  document.getElementById("comp2").innerText =
    kidsProducts[1].compare_at_price;
  document.getElementById("offer2").innerText =
    "(" +
    Math.trunc(
      ((kidsProducts[1].compare_at_price - kidsProducts[1].price) /
        kidsProducts[1].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge2").innerText = kidsProducts[1].badge_text;
    document.getElementById("vendor2").innerText = kidsProducts[1].vendor;

  loadImageRandomly(
    "Image3",
    kidsProducts[2].image,
    kidsProducts[2].second_image
  );
  document.getElementById("prod3Desc").innerText = kidsProducts[2].title;
  document.getElementById("price3").innerText =
    "Rs " + kidsProducts[2].price + " ";
  document.getElementById("comp3").innerText =
    kidsProducts[2].compare_at_price;
  document.getElementById("offer3").innerText =
    "(" +
    Math.trunc(
      ((kidsProducts[2].compare_at_price - kidsProducts[2].price) /
        kidsProducts[2].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge3").style.visibility = "visible";
    document.getElementById("badge3").innerText = kidsProducts[2].badge_text;
    document.getElementById("vendor3").innerText = kidsProducts[0].vendor;

  loadImageRandomly(
    "Image4",
    kidsProducts[3].image,
    kidsProducts[3].second_image
  );
  document.getElementById("prod4Desc").innerText = kidsProducts[3].title;
  document.getElementById("price4").innerText =
    "Rs " + kidsProducts[3].price + " ";
  document.getElementById("comp4").innerText =
    kidsProducts[3].compare_at_price;
  document.getElementById("offer4").innerText =
    "(" +
    Math.trunc(
      ((kidsProducts[3].compare_at_price - kidsProducts[3].price) /
        kidsProducts[3].compare_at_price) *
        100
    ) +
    "% Off)";
    document.getElementById("badge4").style.visibility = "visible";
    document.getElementById("badge4").innerText = kidsProducts[3].badge_text;
    document.getElementById("vendor4").innerText = kidsProducts[3].vendor;
}

window.onload = function () {
  mensData();
};