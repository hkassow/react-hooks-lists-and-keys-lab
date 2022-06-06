import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const x = links.map(link => <Boop bop={link} key={link}/>)
  console.log(x)
  return <nav>{x}</nav>;
}

function Boop({bop}){
  return(
  <a href={'#'+ bop}>{bop}</a>
  )
}
console.log(Boop('hi'))
export default NavBar;
