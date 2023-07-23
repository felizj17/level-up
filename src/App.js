import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Quiz from './components/Quiz'
import './css/App.css'
import './css/home.css'
import {Routes, Route} from 'react-router'
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizes' element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
