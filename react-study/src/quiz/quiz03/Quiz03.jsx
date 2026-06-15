import "./Quiz03.css"
import TextItem from "./TextItem.jsx"

function Quiz03() {
    let titleArr = [ '제목 : 하나', '제목 : 둘', '제목 : 셋','제목 : 넷', '제목 : 다섯' ];
    let textArr = [ '내용 : 내용하나', '내용 : 내용둘', '내용 : 내용셋','내용: 내용넷', '내용 : 다섯'];

    return (
        <div className="App">
            {
            titleArr.map((item, index)=>{
                return(
                <TextItem title={item} text={textArr[index] } key={index}/>
                )
            })
        }
        </div>
    );
}
export default Quiz03;