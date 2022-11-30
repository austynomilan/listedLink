import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const Notfound = () => {
const router = useRouter();
    useEffect(() =>{
       setTimeout(() =>{
        router.push('/')
       }, 3000)
    }, [])
    return ( 
        <div className='not__found'>
            <h1>ooooops....</h1>
            <h2>This page can not be found</h2>
            <p>return to <Link href='/'>Homepage</Link></p>
        </div>
     );
}
 
export default Notfound;