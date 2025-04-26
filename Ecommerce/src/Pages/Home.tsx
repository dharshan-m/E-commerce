import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Products/>
        <Footer/>
    </div>
  )
}