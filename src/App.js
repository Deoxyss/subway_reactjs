import React, { Component } from 'react';
import c1 from './c1.jpg';
import c2 from './c2.jpg';
import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import s1 from './s1.jpg';
import s2 from './s2.jpg';
import s3 from './s3.jpg';
import f1 from './f1.jpg';
import f2 from './f2.jpg';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import xx from './xx.JPG';
import zz from './zz.jpg';
import './App.css';
import './app1.css';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      size: ''
    };
    
    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange0(event) {
    this.setState({
      s0: event.target.value
    });
  }

  handleChange1(event) {
    this.setState({
      s1: event.target.value
    });
  }


  handleChange2(event) {
    this.setState({
      s2: event.target.value
    });
  }

  handleChange3(event) {
    this.setState({
      s3: event.target.value
    });
  }

  handleChange4(event) {
    this.setState({
      s4: event.target.value
    });
  }

  handleChange5(event) {
    this.setState({
      s5: event.target.value
    });
  }

  handleChange6(event) {
    this.setState({
      s6: event.target.value
    });
  }

  handleChange7(event) {
    this.setState({
      s7: event.target.value
    });
  }

  
  handleSubmit(event) {
    event.preventDefault();
    
    alert(`Bill:\n
          Bread: ${this.state.s0} \n
          Cheese: ${this.state.s1} \n 
          Salad Topping 1: ${this.state.s2} \n
          Salad Topping 2: ${this.state.s3} \n
          More Filling: ${this.state.s4} \n
          Spinach/Lettuce: ${this.state.s5} \n
          Sauce 1: ${this.state.s6} \n 
          Sauce 2: ${this.state.s7} \n  
          THANKYOU`);
  }



  render() {



      return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">SUBWAY</h1>
        </header>

        <p className="App-intro">

        </p>

        <br/><br/>
        <hr/>

        <div className="App1">

       

          <div className="aa1">

          <div className="aax">
          Design your meal!
          </div>

           <img src={zz} className="zza" alt="logo" />

          <form onSubmit={this.handleSubmit}>

            <div className="aa2">
            Select Bread type:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left0" name="switch_30" value="Italian- Rs x" onChange={this.handleChange0}/>
              <label for="switch_3_left0"><img src={b1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center0" name="switch_30" value="Flatbread- Rs x" onChange={this.handleChange0} />
              <label for="switch_3_center0"><img src={b2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right0" name="switch_30" value="9_Grain_Wheat- Rs x" onChange={this.handleChange0}/>
              <label for="switch_3_right0"><img src={b3} className="xxx" alt="logo" /></label>
            </div>

            <hr size="14"/>
            <div className="aa2">
            Select Cheese:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left" name="switch_31" value="Cheddar- Rs x" onChange={this.handleChange1}/>
              <label for="switch_3_left"><img src={c1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center" name="switch_31" value="Swiss- Rs x" onChange={this.handleChange1} />
              <label for="switch_3_center"><img src={c2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right" name="switch_31" value="None- Rs 0" onChange={this.handleChange1}/>
              <label for="switch_3_right"><img src={xx} className="xxx" alt="logo" /></label>
            </div>

            <hr size="14"/>
            <div className="aa2">
            Select Topping:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left2" name="switch_32" value="Tomato- Rs x" onChange={this.handleChange2}/>
              <label for="switch_3_left2"><img src={t1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center2" name="switch_32" value="Onion- Rs x" onChange={this.handleChange2}/>
              <label for="switch_3_center2"><img src={t2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right2" name="switch_32" value="Cucumber- Rs x" onChange={this.handleChange2}/>
              <label for="switch_3_right2"><img src={t3} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>
            <div className="aa2">
            Select one more Topping:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left3" name="switch_33" value="Tomato- Rs x" onChange={this.handleChange3} />
              <label for="switch_3_left3"><img src={t1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center3" name="switch_33" value="Onion- Rs x" onChange={this.handleChange3} />
              <label for="switch_3_center3"><img src={t2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right3" name="switch_33" value="Cucumber- Rs x" onChange={this.handleChange3} />
              <label for="switch_3_right3"><img src={t3} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>
            <div className="aa2">
            Select Filling:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left5" name="switch_35" value="Cutlet- Rs x" onChange={this.handleChange4} />
              <label for="switch_3_left5"><img src={f1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center5" name="switch_34" value="Bacon- Rs x" onChange={this.handleChange4} />
              <label for="switch_3_center2"><img src={f2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right5" name="switch_35" value="None- Rs 0" onChange={this.handleChange4} />
              <label for="switch_3_right5"><img src={xx} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>
            <div className="aa2">
            Want any of these:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left6" name="switch_36" value="Lettuce- Rs x" onChange={this.handleChange5} />
              <label for="switch_3_left6"><img src={d1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center6" name="switch_36" value="Other2- Rs x" onChange={this.handleChange5} />
              <label for="switch_3_center6"><img src={d2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right6" name="switch_36" value="None- Rs 0" onChange={this.handleChange5} />
              <label for="switch_3_right6"><img src={xx} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>
            <div className="aa2">
            Select Sauce:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left4" name="switch_34" value="Tomato- Rs x" onChange={this.handleChange6} />
              <label for="switch_3_left4"><img src={s1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center4" name="switch_34" value="Honey_Mustard- Rs x" onChange={this.handleChange6} />
              <label for="switch_3_center4"><img src={s2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right4" name="switch_34" value="Mayo- Rs x" onChange={this.handleChange6} />
              <label for="switch_3_right4"><img src={s3} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>
            <div className="aa2">
            Another Sauce:
            </div>
            <div class="switch-field">
              <input type="radio" id="switch_3_left7" name="switch_37" value="Tomato- Rs x" onChange={this.handleChange7} />
              <label for="switch_3_left7"><img src={s1} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_center7" name="switch_37" value="Honey_Mustard- Rs x" onChange={this.handleChange7} />
              <label for="switch_3_center7"><img src={s2} className="xxx" alt="logo" /></label>
              <input type="radio" id="switch_3_right7" name="switch_37" value="Mayo- Rs x" onChange={this.handleChange7} />
              <label for="switch_3_right7"><img src={s3} className="xxx" alt="logo" /></label>
            </div>


            <hr size="14"/>

            <hr/>
            <button type="submit" className="button">Submit</button><br/><br/>
            <button type="reset" className="button">Clear</button>

            </form>

          </div>



        </div>


      </div>
    );
  }
}

export default App;
