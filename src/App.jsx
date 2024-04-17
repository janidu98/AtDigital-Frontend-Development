import Consultation from "./components/Consultation/Consultation"
import FAQs from "./components/FAQs/FAQs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Consultation />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
