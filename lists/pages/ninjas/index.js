import Head from "next/head";
import styles from "../../styles/Ninjas.module.css"
import Link from "next/link";

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return{
        props: {ninjas: data}
    }
}
const Ninjas = ({ ninjas }) => {
    return ( 
        <>
        <Head>
        <title>next | List</title>
        <meta name="keywords" content="next" />
      </Head>
        <div className={styles.ninjas__container}>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja =>(
                <div key={ ninja.id }>
                   <h3 className={styles.ninja}>
                    <a>{ ninja.name }</a>
                    </h3>
                </div>
            ))

            }
        </div>
        </>
     );
}
 
export default Ninjas;