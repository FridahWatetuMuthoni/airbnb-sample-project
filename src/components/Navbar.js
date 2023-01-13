import logo from '../images/air-logo.png';
import { FaMoon ,FaSun} from 'react-icons/fa';



const Navbar = (props) => {
    const handleChange = () => {
        props.setCheckbox((prev => {
            return !prev
        }))
    }
    return (
        <nav className="nav">
            <section className='navbar'>
                <div className="logo">
                    <img src={ logo} alt="" />
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={handleChange} />
                    <label htmlFor="checkbox" className='label-checkbox'>
                        <FaMoon className='moon' />
                        <FaSun className='sun'/>
                        <div className= {props.checkbox ? 'ball dark' : 'ball light'}></div>
                    </label>
                </div>
        </section>
        </nav>
        )
}

export default Navbar;