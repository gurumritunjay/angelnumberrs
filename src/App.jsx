import { Routes, Route } from "react-router-dom"
import { PageWrapper } from "@/components/layout/PageWrapper"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import Home from "@/pages/Home"
import AngelNumbersDirectory from "@/pages/AngelNumbersDirectory"
import AngelNumberDetail from "@/pages/AngelNumberDetail"
import Numerology from "@/pages/Numerology"
import Horoscope from "@/pages/Horoscope"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/angel-numbers" element={<AngelNumbersDirectory />} />
        <Route path="/angel-numbers/:number" element={<AngelNumberDetail />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
    </PageWrapper>
  )
}

export default App
