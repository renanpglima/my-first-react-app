import { Link } from 'react-router-dom'

//style
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='brand'> 
                <h1>Cooking Ninja</h1>
            </Link>
            <Link to="/create"> 
                <p>Create Recipe</p>
            </Link>
        </nav>
    </div>
  )
}
