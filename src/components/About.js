import React, { Fragment } from "react"

const About = () => {
  document.title = "About"
  return (
    <Fragment>
      <h1 className="crimson-text-regular mx-5">About</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="/me-6.jpg"
              alt="James Lopez"
              className="img-fluid w-75 mb-4"
            />
          </div>

          <div className="col-md-8">
            <p className="lead">
              <strong>James Lopez</strong> is a New York-based photographer who
              specializes in capturing stunning outdoor portraits that celebrate
              the beauty of human connection. While his primary focus is on
              portraiture, his love for nature often leads him to explore and
              photograph breathtaking landscapes in his spare time.
            </p>
            <p>
              With a degree double majoring in Computer Science and Mathematics,
              James brings a unique analytical eye to his creative work. His
              go-to camera? The Canon EOS R6 and, more recently, the Polaroid
              Now+ 2nd Generation—a perfect companion for his passion for
              instant, tangible photography.
            </p>
            <p>
              Above all, James cherishes the support and love of his fiancée,
              who inspires him every day.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
