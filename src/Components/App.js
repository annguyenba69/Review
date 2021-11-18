import ReviewItem from "./ReviewItem/ReviewItem";
import data from "./Data.json";
function App() {
  return (
    <div id="wrapper">
      <div id="review">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h4 className="text-center">Our Reviews</h4>
              <div className="underline" />
            </div>
            <ReviewItem data={data}></ReviewItem>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
