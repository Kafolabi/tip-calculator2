import './App.css'
import Header from './components/Header'
import FormCalculateTip from './components/FormCalculateTip';
import CalculateTip from './components/CalculateTip';  
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-2xl">
      <Header />
      <FormCalculateTip />
      <Footer />
    </div>
  );
}

export default App
