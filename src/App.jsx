import backgroundMobile from './assets/images/background-pattern-mobile.svg'
import backgroundDesktop from './assets/images/background-pattern-desktop.svg'
import FAQs from './components/FAQs'

function App() {
    return (
        <div className="sm:font-base sm:text-lg h-screen w-full flex items-center justify-center bg-no-repeat bg-contain bg-pink-light bg-mobile md:bg-desktop">
            <FAQs />
        </div>
    )
}

export default App
