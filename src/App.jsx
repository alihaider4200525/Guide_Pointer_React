import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection';
import './App.css';
import Background from './components/Background/Background';

function App() {

  return (
      <>
        <Background />
        <Header />
        <ActivitiesSection />
        <BottomNavigation />
      </>
  )
}

export default App
