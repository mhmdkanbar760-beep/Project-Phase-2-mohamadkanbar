function Home() {
  return (
    <div>

      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/images/photo-1507525428034-b723cf961d3e.avif"
              className="d-block w-100 slider-img"
              alt="Summer"
            />

            <div className="carousel-caption">
              <h2>Summer Sale</h2>
              <p>Bright products for sunny days</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/pexels-pixabay-33109.jpg"
              className="d-block w-100 slider-img"
              alt="Autumn"
            />

            <div className="carousel-caption">
              <h2>Autumn Deals</h2>
              <p>Cozy items for the autumn season</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/pexels-photo-688660.jpeg"
              className="d-block w-100 slider-img"
              alt="Winter"
            />

            <div className="carousel-caption">
              <h2>Winter Collection</h2>
              <p>Warm products and seasonal discounts</p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      <section className="container text-center my-5">
        <h1>Welcome to Seasonal Store</h1>

        <p>
          Simple website for seasonal products and special offers.
        </p>

        <a href="/products" className="btn btn-primary">
          Shop Now
        </a>
      </section>

      <div className="container mb-5">

        <h2 className="text-center mb-4">Featured Seasons</h2>

        <div className="row g-4">

          <div className="col-md-4 col-sm-6">
            <div className="card h-100">

              <img
                src="/images/photo-1507525428034-b723cf961d3e.avif"
                className="card-img-top season-img"
                alt="Summer"
              />

              <div className="card-body text-center">
                <h5>Summer</h5>
                <p>Fresh and colorful seasonal items.</p>
              </div>

            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100">

              <img
                src="/images/pexels-pixabay-33109.jpg"
                className="card-img-top season-img"
                alt="Autumn"
              />

              <div className="card-body text-center">
                <h5>Autumn</h5>
                <p>Soft and cozy autumn products.</p>
              </div>

            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card h-100">

              <img
                src="/images/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg"
                className="card-img-top season-img"
                alt="Winter"
              />

              <div className="card-body text-center">
                <h5>Winter</h5>
                <p>Warm and elegant winter collection.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;