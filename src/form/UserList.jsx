import FormItem from "./FormItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="list-container">
      {props.users.map((user) => (
        <FormItem name={user.name} age={user.age} key={user.id} />
      ))}
    </ul>
  );
};
export default UserList;
