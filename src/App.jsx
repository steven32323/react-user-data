import InputForm from "./form/InputForm";
import { useState } from "react";
import UserList from "./form/UserList";
import Card from "./assets/UI/Card";

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
    <>
      <Card>
        <div>
          <InputForm onAddUser={addUserHandler} />
        </div>
      </Card>
      <section>
        <UserList users={userData} />
      </section>
    </>
  );
}

export default App;
