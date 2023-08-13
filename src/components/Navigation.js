
const Navigation = () => {
    const openHandle = ()=>{
        const settings = document.querySelector(".settings");

        settings.classList.toggle("open");
    }
    return ( 
        <header className='header'>
            <div className='logo'>
                Pomodoroxddd
            </div>
            <ul className='menu'>
                <li><a href='/'>Hola</a></li>
                <li><a href='/'>Hola1</a></li>
                <li><a href='/'>Hola2</a></li>
            </ul>
            <div className="icon">
                <i className="fa-solid fa-gear" onClick={openHandle}></i>
            </div>
        </header>
     );
}
 
export default Navigation;