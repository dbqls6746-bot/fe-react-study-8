import "./Quiz04.css"
import { useState } from "react";

function Quiz04() {
    let [ boxes, setBoxes ] = useState(['박스', '박스']);
    return (
        <div style = {{margin : '10px'}}>
            <button onClick={() => {
                let temp = [ ...boxes, '박스' ];
                // temp.push('박스');
                setBoxes(temp);
                console.log(temp);
            }}>추가</button>
            <br /><br />
            {

                boxes.map((_,index) => {
                    return <span className="box" key={index}>박스</span>
                })

            }
            
        </div>
    )
}
export default Quiz04;