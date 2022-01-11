import { Navbar } from "./Navbar"
import { Crypto } from "./pages/Crypto"
import { Footer } from "./pages/Footer"
import { Home } from "./pages/Home"
import { Section1 } from "./pages/Section1"

export function Layout() {
    return (
        <div>
            <Navbar />
            <div className="mt-52">
                <Home />
                <Crypto />
                <Section1 />
                <Footer />
            </div>
        </div>
    )
}
