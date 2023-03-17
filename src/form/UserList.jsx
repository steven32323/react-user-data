import FormItem from "./FormItem";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <FormItem name={user.name} age={user.age} key={user.id} />
      ))}
    </ul>
  );
};
export default UserList;
