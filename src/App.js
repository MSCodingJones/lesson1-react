import Header from "./components/Header"
import Main from  "./components/Main"
import Footer from "./components/Footer"

const App =()=> {

    const today = new Date()

    const theDay = today.getDay() == 1 ? 'Monday' : null


    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App