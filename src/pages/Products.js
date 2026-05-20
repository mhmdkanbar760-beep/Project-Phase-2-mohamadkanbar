function Products() {
  return (
    <div className="container mt-5 mb-5">

      <h2 className="text-center mb-4">Products</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card product-card h-100">

            <img
              src="/images/straw-hat-man_1203-7257.avif"
              className="card-img-top product-img"
              alt="Summer Hat"
            />

            <div className="card-body text-center">
              <h5>Summer Hat</h5>
              <p>Perfect for sunny days.</p>
              <p className="price">$15</p>

              <button className="btn btn-success">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="card product-card h-100">

            <img
              src="/images/6a985aaa-8a95-4382-97a9-91cdf96f43d3-Moraine_Lake_Dennis_Frates_Alamy_Stock_Photo.jpg"
              className="card-img-top product-img"
              alt="Winter Jacket"
            />

            <div className="card-body text-center">
              <h5>Winter Jacket</h5>
              <p>Stay warm in winter.</p>
              <p className="price">$60</p>

              <button className="btn btn-success">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="card product-card h-100">

            <img
              src="/images/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg"
              className="card-img-top product-img"
              alt="Gift Box"
            />

            <div className="card-body text-center">
              <h5>Gift Box</h5>
              <p>Nice seasonal gift.</p>
              <p className="price">$25</p>

              <button className="btn btn-success">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="card product-card h-100">

            <img
              src="/images/Apollo_Ultra-Black-Front.webp"
              className="card-img-top product-img"
              alt="Sunglasses"
            />

            <div className="card-body text-center">
              <h5>Sunglasses</h5>
              <p>Protect your eyes in style.</p>
              <p className="price">$10</p>

              <button className="btn btn-success">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="card product-card h-100">

            <img
              src="/images/PDP_35L_Backpack-PAKT-6-14-23-25138_524dfb70-e013-4e6c-85aa-53080a4b1cab.jpg"
              className="card-img-top product-img"
              alt="Backpack"
            />

            <div className="card-body text-center">
              <h5>Backpack</h5>
              <p>Perfect for daily use.</p>
              <p className="price">$30</p>

              <button className="btn btn-success">
                Add to Cart
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;