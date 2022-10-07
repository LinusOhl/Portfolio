function navLinkScroll() {
  let liLength = document.getElementById("ul_o").getElementsByTagName("li");

  console.log(liLength);
  console.log(liLength.length);

  for (let i = 0; i < liLength.length; i++) {
    document.getElementsByTagName("h2")[i].scrollIntoView();
    console.log(document.getElementsByTagName("h2")[i]);
  }
}

function navLinkScrollFirst() {
  console.log(document.getElementsByTagName("h2")[0].scrollIntoView());
  document.getElementsByTagName("h2")[0].scrollIntoView();
}

function navLinkScrollSecond() {
  document.getElementsByTagName("h2")[1].scrollIntoView();
}

function navLinkScrollThird() {
  document.getElementsByTagName("h2")[2].scrollIntoView();
}
