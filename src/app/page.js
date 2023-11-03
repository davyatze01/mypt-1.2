import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Navbar.js';
import Header from './Header.js';
import { Slider } from './Slider.js';


export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      
    </>
  )
}
