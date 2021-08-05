import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from "./header"
// import Preloader from './components/Preloader'
import M from "materialize-css"; 
import './App.css'
const $ = window.$;
M.AutoInit();



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {duration: 400 });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {hover: true});
});



class App extends Component {
 
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {fullWidth: true,
      indicators: true });
  }




  render() {
    return(
      
      <main>
         
         <Header/>

 <footer>
          <div class="footer-copyright">
            <div class="container">
             Forged In Fire By The <a class="green-text" href="https://github.com/WareDave">WareDave  <i class="fa fa-github"></i></a> 
            <a class="pink-text text-lighten-4 right" href="/">© 2020 Copyright</a>

           
            </div>
          </div>
        
 </footer>       

      </main>
     
    )
  }
}

export default App;







 