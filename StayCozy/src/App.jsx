/* eslint-disable no-unused-vars */
// import './App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Data from './data';

export default function App() {
  const cards = Data.map((item, index) => {
    return (
      <Card
        /*The key prop is used by React to keep track of which components have changed, been added, or been removed. */
        key={index}
        item={item}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

/* 
  rating
  reviews
  country
  title
  price
*/
