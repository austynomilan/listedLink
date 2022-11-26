import Link from 'next/link'

const Navbar = () => {
    return ( 
       <nav>
        <div className="logo">
            <h1>Ninja list</h1>
        </div>
        <div className='nav__links'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja Listing</Link>
        </div>
       </nav>
     );
}
 
export default Navbar;