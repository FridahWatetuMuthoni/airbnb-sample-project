import logo from '../images/air-logo.png';


const Navbar = () => {
    return (
        <nav className="nav">
            <section className='navbar'>
                <div className="logo">
                    <img src={ logo} alt="" />
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className='label'>
                        <div className="ball"></div>
                    </label>
                </div>
        </section>
        </nav>
        )
}

export default Navbar;