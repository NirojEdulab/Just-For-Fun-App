import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
                <nav className='nav nav-pills'>
                <NavLink to='/' 
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                    >Home</NavLink>
                    <NavLink to='form'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                    >Form</NavLink>
                </nav>
                <div className="copyrights">
                    &copy;Niroj Kumar @MatrIoT
                </div>
        </div>
    </footer>
  )
}

export default Footer