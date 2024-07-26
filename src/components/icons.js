function Icons() {
  const openInNewTab = (url) => {
    window.open(url, "_blank")
  }
  return (
    <div className="icons">
      <i
        className="bi bi-facebook mx-2"
        onClick={() => openInNewTab("https://facebook.com/jrslopezphoto")}
      ></i>
      <i
        className="bi bi-instagram mx-2"
        onClick={() => openInNewTab("https://instagram.com/jrslopez_")}
      ></i>
      <i
        className="bi bi-envelope mx-2"
        onClick={() => openInNewTab("mailto:jrslopezphoto@gmail.com")}
      ></i>
      <i
        className="bi bi-twitter-x mx-2"
        onClick={() => openInNewTab("https://x.com/jrslopez_")}
      ></i>
    </div>
  )
}

export default Icons
