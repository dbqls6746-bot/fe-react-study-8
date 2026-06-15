
function TextItem({title,text}) {



    return (
        <div className='textItem'>
            <p className='title'>{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default TextItem;