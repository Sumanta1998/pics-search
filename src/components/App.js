import React from "react";
// import unsplash from "../api/unsplash";
// import pixabay from "../api/pixabay";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";
import Axios from "axios";

class App extends React.Component {
  state = {
    images: [],
    apiKey: "19505851-f21de190e43277bfdf6f5b1f1",
  };
  onSearchSubmit = async (term, page) => {
    let url =
      "https://pixabay.com/api/?key=" +
      this.state.apiKey +
      "&per_page=20" +
      "&page=" +
      page +
      "&q=" +
      term +
      "&image_type=photo";

    const response = await Axios.get(url);
    console.log(response);
    this.setState({ images: response.data.hits });
    // console.log(fetch(url).then((response) => response.json()));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
