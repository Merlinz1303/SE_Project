import './navbar.css';
function Navbar(){
    return(
        <nav className='nav'>
            <a className='site_title' style={{ color: '#f57f7f' }}>TESTTO</a>
            <ul>
                <li className='active'>
                    <a href='/information' className='menu_text' >เกี่ยวกับ</a>
                </li>
                <li className='active'>
                    <a href='/select_car' className='menu_text' >เลือกรถ</a>
                </li>
                <li>
                    <a href='=/register' className='menu_text'>วิธีสมัคร</a>
                </li>
                <li>
                    <a href='=/contact' className='menu_text'>ติดต่อ/สอบถาม</a>
                </li>
                <li>
                    <a href='=/Booking' className='menu_text'>ข้อมูลการจอง</a>
                </li>
                <li>
                    <a href='=/lessing' className='menu_text'>ข้อมูลสัญญาเช่าซื้อ</a>
                </li>
            </ul>
            
        </nav>
        
    );

} 

export default Navbar