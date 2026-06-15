import { useState } from "react";

function Quiz02() {
    let [ index, setIndex ] = useState(0);

    let pText = [ '하나', '둘', '셋' ]

    return (
        <div style={{textAlign:'center'}}>
            <p>{pText[index]}</p>
            <button onClick={() => {
                const nextIndex = (index + 1) % pText.length;
                setIndex(nextIndex);
            }}>변경버튼</button>
        </div>

    )
}

export default Quiz02;
