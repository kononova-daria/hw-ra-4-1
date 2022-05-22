import React, {useState} from 'react';

function Converter() {
  const [backColor, setBackground] = useState('#FFFFFF');
  const [result, setResult] = useState('');

  const handleSetColor = (event) => {
      if (event.target.value.length === 7) {
          toRGB(event.target.value);
      }
  }

  function toRGB(colorHex) {
    let result = colorHex && /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
    if (result) {
        setBackground(colorHex);
        setResult(`rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`);
    } else {
        setBackground('#cd5b45');
        setResult('Ошибка!');
    }
  }

  return (
    <div className="main-page" style={{backgroundColor: backColor}}>
        <div className="form">
            <div><input className="form-input data" id="hex" name="hex" onChange={handleSetColor} maxLength="7"></input></div>
            <div  className="form-input result"><span>{result}</span></div>
        </div>
    </div>
  );
}
  
export default Converter;