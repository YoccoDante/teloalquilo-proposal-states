import React, {useState} from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import UsersMapped from './components/UsersMapped';
import { UsersList } from './models/users';

function App() {
  const [rate, setRate] = useState(0)
  const [nameFilter, setNameFilter] = useState<string|null>(null)
  const [stateFilter, setStateFilter] = useState<string|null>(null)
  const filteredUsers = UsersList.filter(user => {
    return (
      (!nameFilter || user.full_name.toLocaleLowerCase().includes(nameFilter)) &&
      (!stateFilter || user.state.toLocaleLowerCase().includes(stateFilter)) &&
      (user.rate >= rate)
    )
  })
  return (
    <div>
      <span>rate: {rate}</span>
      <FilterBar setRate={setRate} setNameFilter={setNameFilter} setStateFilter={setStateFilter} stateFilter={stateFilter}/>
      <UsersMapped users={filteredUsers}/>
    </div>
  );
}

export default App;
