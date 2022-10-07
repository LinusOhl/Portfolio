function navLinkScroll() {
  let liLength = document.getElementById("ul_o").getElementsByTagName("li");

  console.log(liLength);
  console.log(liLength.length);

  for (let i = 0; i < liLength.length; i++) {
    document.getElementsByTagName("h2")[i].scrollIntoView();
    console.log(document.getElementsByTagName("h2")[i]);
  }
}
