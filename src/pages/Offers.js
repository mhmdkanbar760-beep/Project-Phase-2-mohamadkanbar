function Offers() {
  return (
    <div className="container main-box">

      <h1 className="text-center title">Offers</h1>

      <div className="row mt-4">

        <div className="col-md-6">
          <div className="offer-box offer1">
            <h2>Ramadan Offers</h2>
            <p>Discount on food boxes</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="offer-box offer2">
            <h2>Summer Sale</h2>
            <p>Discount on clothes</p>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div className="offer-box offer3">
            <h2>Autumn Deals</h2>
            <p>Discount on simple products</p>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div className="offer-box offer4">
            <h2>Winter Sale</h2>
            <p>Discount on jackets</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Offers;