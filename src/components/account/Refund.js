import "./Refund.css";

function Refund() {
  return (
    <div className="refund-container">
      <form className="order-form">
        <input placeholder="Order number" />
        <input placeholder="Store name" />
        <input placeholder="Awaiting returns" />
        <button className="search-btn">Search</button>
      </form>
      <div className="order-listing">
        <table className="table table">
          <thead>
            <tr>
              <td>Order information</td>
              <td>Current status</td>
            </tr>
          </thead>
        </table>
        <p className="listing-result">Your search did not match any listings</p>
      </div>
    </div>
  );
}

export default Refund;
