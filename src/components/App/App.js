import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//importing Header
import Header from '../Header/Header';

//importing Footer
import Footer from '../Footer/Footer';

//importing GuestList
import GuestList from '../GuestList/GuestList';

//importing DinnerSupplies
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';

//importing GuestForm
import GuestForm from '../GuestForm/GuestForm';
function App() {
  let [guestList, setGuestList] = useState([]);
  // let [newGuestName, setNewGuestName] = useState('');
  // let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (newGuest) => {
    axios.post('/guests', newGuest)
      .then(response => {
        // clear inputs
        // setNewGuestName('');
        // setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  //console.log(newGuestMeal)
  return (
    <div className="App">

      <Header title = "Prim Proper Props"/>
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm 
        addGuest = {addGuest}
      />
      <GuestList guestList = {guestList}/>
      <DinnerSupplies guestList = {guestList}/>
      <Footer />
    </div>
  );
}

export default App;
