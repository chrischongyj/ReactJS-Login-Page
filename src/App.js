import React, { Component } from "react";
import './index.css';

class App extends React.Component {
	render() {
  	return (
    	<div>

        <form >
    <label>
    Username:
    <input type="text" name="username" />
  </label>
 <br />
  <label>
    Password:
    <input type="text" name="password" />
  </label>
  <input type="submit" value="Login" />
</form>
    	</div>
    );
  }	
}

export default App;
