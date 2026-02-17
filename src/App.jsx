import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection';
import './App.css';
import Background from './components/Background/Background';
import ViewActivity from './components/ViewActivity/ViewActivity';
import ReviewSelection from "./components/ReviewSelection/ReviewSelection";
import ListAssignments from "./components/ListAssignments/ListAssignments";

function App() {

  return (
      <BrowserRouter>
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<ActivitiesSection />} />
          <Route path="/view-activity" element={<ViewActivity />} />
          <Route path="/review-selection" element={<ReviewSelection />} />
          <Route path="/list-assignments" element={<ListAssignments />} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
  )
}

export default App
