// import { useState } from "react";
import "./App.css";
import IcecreamView from "../features/icecream/IcecreamView";
import CakeView from "../features/cake/CakeView";
import UserList from "../features/user/UserList";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserList />
    </div>
  );
}
export default App;
