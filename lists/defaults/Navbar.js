import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
       <nav>
        <div className="logo">
            <Image src='/profile__img.png' width={98}  height={77}/>
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