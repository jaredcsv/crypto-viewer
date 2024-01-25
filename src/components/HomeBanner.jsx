import "/src/styles/components/HomeBanner.css"

function HomeBanner() {
  return (
    <section>
        <div className="home-banner-title_container">
        <h3>Welcome to WormCoins</h3>
        <p>Your Hub for Crypto Insights!</p>
        </div>
      <div className="home-banner-img_container">
        <img className="home-banner_img" src="/src/assets/animations/home-anim.gif" alt="" />
        <p className="home-banner_description">
          Discover the latest crypto news and real-time market stats with us.
          Stay informed, make smarter decisions, and navigate the exciting world
          of digital assets. Trust WormCoins for accurate and unbiased
          information. Let the crypto journey begin!{" "}
        </p>
      </div>
    </section>
  );
}

export default HomeBanner;
