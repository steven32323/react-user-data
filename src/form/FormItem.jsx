import "./UserList";

const FormItem = (props) => {
  return (
    <li className="list-item">
      Name: {props.name} ({props.age} years old)
    </li>
  );
};

export default FormItem;
