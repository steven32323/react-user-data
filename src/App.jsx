import InputForm from "./form/InputForm";
import { useState } from "react";
import UserList from "./form/UserList";
import Card from "./assets/UI/Card";
import Modal from "./assets/UI/Modal";

function App() {
  const [error, setError] = useState(null);
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

  const handleError = (error) => {
    setError(error);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      {error !== null && <Modal error={error} setError={setError} />}
      <Card>
        <div>
          <InputForm onAddUser={addUserHandler} onError={handleError} />
        </div>
      </Card>
      <Card>
        <UserList users={userData} />
      </Card>
    </>
  );
}

export default App;
