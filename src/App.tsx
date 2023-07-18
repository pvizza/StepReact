import './App.css'
import FormComponent from './components/formComponent/FormComponent'
import SideComponent from './components/sideComponent/SideComponent'

function App() {

  return (
    <>
     <main className='app_container'>
      <div className='app'>
       <SideComponent/>
       <FormComponent/>
      </div>

     </main>
    </>
  )
}

export default App
