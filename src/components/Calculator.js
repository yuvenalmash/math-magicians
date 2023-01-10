import './calculator.css';

const Calculator = () => (
  <main>
    <input type="text" id="itemInput" placeholder="0" />
    <button id="item0" className="btn" type="button">0</button>
    <button id="item1" className="btn" type="button">1</button>
    <button id="item2" className="btn" type="button">2</button>
    <button id="item3" className="btn" type="button">3</button>
    <button id="item4" className="btn" type="button">4</button>
    <button id="item5" className="btn" type="button">5</button>
    <button id="item6" className="btn" type="button">6</button>
    <button id="item7" className="btn" type="button">7</button>
    <button id="item8" className="btn" type="button">8</button>
    <button id="item9" className="btn" type="button">9</button>
    <button id="itemAC" className="btn" type="button">AC</button>
    <button id="itemPlusMinus" className="btn" type="button">+/-</button>
    <button id="itemModulus" className="btn" type="button">%</button>
    <button id="itemDivide" className="btn special" type="button">÷</button>
    <button id="itemMultiply" className="btn special" type="button">×</button>
    <button id="itemMinus" className="btn special" type="button">-</button>
    <button id="itemPlus" className="btn special" type="button">+</button>
    <button id="itemEqual" className="btn special" type="button">=</button>
    <button id="itemPeriod" className="btn" type="button">•</button>
  </main>
);

export default Calculator;
