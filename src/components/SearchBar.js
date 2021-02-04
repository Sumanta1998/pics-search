import React from "react";

class SearchBar extends React.Component {
  state = { term : "", page:1};
  
 onFormSubmit = (event) =>{
     event.preventDefault();
     this.props.onSubmit(this.state.term, this.state.page);
 };
 nextPage = ()=>{
   this.setState({page:this.state.page+1});
   console.log(this.state.page);

 }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" 
            value={this.state.term}
            onChange={(e) => this.setState({term : e.target.value})} />
          </div>
          <button type="submit" onClick={this.nextPage}>next</button>
        </form>
        
      </div>
    );
  }
}

export default SearchBar;
