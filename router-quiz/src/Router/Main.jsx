import { Routes, Route, Link, useNavigate } from 'react-router';
import './Main.css'
import Info from './Info';

function Main() {
    return (
        <div>
            <span className='box'><Link to="/">Main</Link></span>
            <span className='box'><Link to="/info">/info</Link></span>
            <span className='box'><Link to="/mypage">/mypage</Link></span>
            <span className='box'><Link to="/cart">/cart</Link></span>

            {/* <span className='box' onClick={()=>{ navigate("/")}}>Main</span>
            <span className='box' onClick={()=>{ navigate("/info")}}>/info</span>
            <span className='box' onClick={()=>{ navigate("/mypage")}}>/mypage</span>
            <span className='box' onClick={()=>{ navigate("/cart")}}>/cart</span> */}

            <div className='bg'>
                <Routes>
                    <Route path="/" element={<h1>Main</h1>} />
                    <Route path="/info" element={<Info/>} />
                    <Route path="/mypage" element={<h1>mypage 공간입니다.</h1>} />
                    <Route path="/cart" element={<h1>cart 공간입니다.</h1>} />
                </Routes>
            </div>
        </div>
    )
}

export default Main;