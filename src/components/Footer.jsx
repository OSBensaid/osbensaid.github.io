import "../styles/Footer.css";
function Footer() {
  const year = currentTime.getFullYear();
  return (
    <div className="footer">
      <p>&copy; {year} Oussama Bensaid</p>
    </div>
  );
}

export default Footer;
