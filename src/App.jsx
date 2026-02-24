import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ActivitiesSection from './components/ActivitiesSection/ActivitiesSection';
import './App.css';
import Background from './components/Background/Background';
import ViewActivity from './components/ViewActivity/ViewActivity';
import ReviewSelection from "./components/ReviewSelection/ReviewSelection";
import ListAssignments from "./components/ListAssignments/ListAssignments";
import MakePayment from "./components/MakePayment/MakePayment";
import PaymentConfirmation from "./components/PaymentConfirmation/PaymentConfirmation";
import AllDetails from "./components/AllDetails/AllDetails";

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
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/all-details" element={<AllDetails />} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
  )
}

export default App
