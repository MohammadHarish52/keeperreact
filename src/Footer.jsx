import React from "react";

const currentYear = new Date().getFullYear();
const copyrightText = `© Copyright ${currentYear}`;


function Footer() {
  return <footer>
    <p>{copyrightText}</p>

  </footer>
}

export default Footer;