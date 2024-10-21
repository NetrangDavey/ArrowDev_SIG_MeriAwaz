function Home(){
    return (
        <div className="hero">
          <div className="hero-left-side">
            <div className="text">
              <h1>Meri Awaz</h1>
              <p>
                <b>Meri Aawaz</b> is an{" "}
                <i> interactive civic management platform</i>
                designed to empower citizens by providing a straightforward and
                efficient way to report and track local civic issues. Whether it's a
                pothole on your street, a broken streetlight, or a waste management
                concern, Meri Aawaz serves as your voice in the community.
              </p>
            </div>
            <div className="flex_btns">
              <Link
                to="/Report_p"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="Report_problem">Report problem</button>
              </Link>
              <Link
                to="/Problems_page"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="Report_problem">Problems </button>
              </Link>
            </div>
          </div>
          <div className="hero-right-side">
            <img src={logo} alt="" />
          </div>
        </div>
      );
}

export default Home