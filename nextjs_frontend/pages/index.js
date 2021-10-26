import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
    <Navbar />
    <main>
      <div className="search-section">
        <div className="input-container">

        <select>
          <option defaultChecked>Catégorie</option>
          <option>Animaux</option>
          <option>Alimentaire</option>
          <option>Maison</option>
          <option>Mode</option>
          <option>Véhicule</option>
          <option>Multimédias</option>
          <option>Services</option>
        </select>
        <input className="search-bar" />
        <div className="price">Prix</div>
        </div>
        <button className="submit">Rechercher</button>
      </div>
    </main>
    </>

  )
}
