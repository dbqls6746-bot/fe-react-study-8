import './Quiz05.css';
import { useState } from "react";

function Quiz05() {
    let [ boxes, setBoxes ] = useState([ <div className='box' style={{ backgroundColor: 'black' }}></div>]);
    return (
        <div>
            <button onClick={() => {
                let temp = [ <div className='box' style={{ backgroundColor: 'red' }}></div>, ...boxes ];
                setBoxes(temp)
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ <div className='box' style={{ backgroundColor: 'blue' }}></div>, ...boxes ];
                setBoxes(temp)
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [ <div className='box' style={{ backgroundColor: 'green' }}></div>, ...boxes ];
                setBoxes(temp)
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [ ...boxes, <div className='box' style={{ backgroundColor: 'red' }}></div> ];
                setBoxes(temp)
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxes, <div className='box' style={{ backgroundColor: 'blue' }}></div> ];
                setBoxes(temp)
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxes, <div className='box' style={{ backgroundColor: 'green' }}></div> ];
                setBoxes(temp)
            }}>뒤초록박스추가</button>

            <button onClick={()=>{
                let temp = [...boxes]
                temp.shift()
                setBoxes(temp)
            }}>앞 박스 삭제</button>

            <button onClick={()=>{
                let temp = [...boxes]
                temp.pop()
                setBoxes(temp)
            }}>뒷 박스 삭제</button>
            <div>
                {boxes}
            </div>
            
        </div>
    )
}

export default Quiz05;