import InputForm from "./form/inputForm";
import { useState } from "react";
import UserList from "./form/UserList";

function App() {
  const [userData, setUserData] = useState([
    { name: "Steven", age: 33, id: Math.random() },
    { name: "John", age: 24, id: Math.random() },
  ]);

  const addUserHandler = (userName, userAge) => {
    setUserData((prevData) => {
      const updatedData = [...prevData];
      updatedData.unshift({ name: userName, age: userAge, id: Math.random() });
      console.log(userData);
      return updatedData;
    });
  };
  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <section>
        <UserList users={userData} />
      </section>
    </div>
  );
}

export default App;
