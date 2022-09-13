function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => {
    return <a href={`#${link}`}>{link}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
