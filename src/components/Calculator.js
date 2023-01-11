import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleCalculate(e) {
    e.preventDefault();
    const buttonName = e.target.name;
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <main>
        <div id="itemInput">
          {total}
          {operation}
          {next}
        </div>
        <button id="item0" className="btn" name="0" onClick={this.handleCalculate} type="button">0</button>
        <button id="item1" className="btn" name="1" onClick={this.handleCalculate} type="button">1</button>
        <button id="item2" className="btn" name="2" onClick={this.handleCalculate} type="button">2</button>
        <button id="item3" className="btn" name="3" onClick={this.handleCalculate} type="button">3</button>
        <button id="item4" className="btn" name="4" onClick={this.handleCalculate} type="button">4</button>
        <button id="item5" className="btn" name="5" onClick={this.handleCalculate} type="button">5</button>
        <button id="item6" className="btn" name="6" onClick={this.handleCalculate} type="button">6</button>
        <button id="item7" className="btn" name="7" onClick={this.handleCalculate} type="button">7</button>
        <button id="item8" className="btn" name="8" onClick={this.handleCalculate} type="button">8</button>
        <button id="item9" className="btn" name="9" onClick={this.handleCalculate} type="button">9</button>
        <button id="itemAC" className="btn" name="AC" onClick={this.handleCalculate} type="button">AC</button>
        <button id="itemPlusMinus" className="btn" name="+/-" onClick={this.handleCalculate} type="button">+/-</button>
        <button id="itemModulus" className="btn" name="%" onClick={this.handleCalculate} type="button">%</button>
        <button id="itemDivide" className="btn special" name="÷" onClick={this.handleCalculate} type="button">÷</button>
        <button id="itemMultiply" className="btn special" name="x" onClick={this.handleCalculate} type="button">×</button>
        <button id="itemMinus" className="btn special" name="-" onClick={this.handleCalculate} type="button">-</button>
        <button id="itemPlus" className="btn special" name="+" onClick={this.handleCalculate} type="button">+</button>
        <button id="itemEqual" className="btn special" name="=" onClick={this.handleCalculate} type="button">=</button>
        <button id="itemPeriod" className="btn" name="." onClick={this.handleCalculate} type="button">•</button>
      </main>
    );
  }
}

export default Calculator;
