import Logo from '../assets/Logo.svg'

export default function Navbar(){
    return (
        <nav className='navbar-section'>
            <img src={Logo} alt="world" className='navbar--logo'/>
            <h4 className='navbar--title'>my travel journal.</h4>
        </nav>
    )
}