import React from 'react'
import './static/style/style.css'
import './static/style/mobile.css'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RemindPassword from "./pages/RemindPassword";
import MyAccount from "./pages/MyAccount";
import AddPet from "./pages/AddPet";
import UserNotifications from "./pages/UserNotifications";
import SingleHotel from "./pages/SingleHotel";
import AddReservation from "./pages/AddReservation";
import HotelOwnerNotifications from "./pages/HotelOwnerNotifications";
import MyAccountHotelOwner from "./pages/MyAccountHotelOwner";
import AddHotel from "./pages/AddHotel";
import UpdateHotel from "./pages/UpdateHotel";
import BlockDays from "./pages/BlockDays";

function App() {
  return (
    <Router>
      <Switch>
        {/* Public pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/zarejestruj-sie" element={<RegisterPage />} />
        <Route path="/zaloguj-sie" element={<LoginPage />} />
        <Route path="/przypomnij-haslo" element={<RemindPassword />} />
        <Route path="/hotel" element={<SingleHotel />} />

        {/* User account */}
        <Route path="/moje-konto" element={<MyAccount />} />
        <Route path="/dodaj-zwierzaka" element={<AddPet />} />
        <Route path="/moje-rezerwacje" element={<UserNotifications />} />
        <Route path="/zloz-rezerwacje" element={<AddReservation />} />
        <Route path="/ulubione" element={<Homepage />} />

        {/* Hotel owner account */}
        <Route path="/rezerwacje-moich-hoteli" element={<HotelOwnerNotifications />} />
        <Route path="/konto-hotelarza" element={<MyAccountHotelOwner />} />
        <Route path="/dodaj-hotel" element={<AddHotel />} />
        <Route path="/edytuj-hotel" element={<UpdateHotel />} />
        <Route path="/dni-wolne" element={<BlockDays />} />

      </Switch>
    </Router>
  );
}

export default App;
