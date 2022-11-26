import Head from "next/head";
import Image from "next/image";
import Footer from "../defaults/Footer";
import Navbar from "../defaults/Navbar";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus
        labore totam molestias reprehenderit delectus saepe. Sequi pariatur,
        corrupti veritatis eveniet itaque commodi accusamus aliquid minima illum
        incidunt hic quis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio illum
        inventore nesciunt aut, perspiciatis dolore voluptas vitae, dolores
        adipisci non obcaecati provident nemo eligendi ut ipsam ratione, quae
        eveniet.
      </p>
      <Link href='/ninjas'>see lists</Link>
      <Footer />
    </div>
  );
}
