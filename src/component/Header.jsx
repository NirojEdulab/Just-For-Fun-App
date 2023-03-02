import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <Link to='/' className='brand'><img src="assets/logo.png" alt="logo" width="30px" height="30px"/></Link>
                    <div className="brandName">
                    <Link to='/' className='brandName'>Just for FUN</Link>
                    </div>
                </div>
                <nav className='nav nav-pills'>
                    <NavLink to='/' 
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                    >Home</NavLink>
                    <NavLink to='form'
                    className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                    >Game Page</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header