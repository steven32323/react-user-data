import "./UserList";

const FormItem = (props) => {
  return (
    <li className="list-item">
      Name: {props.name}, Age: {props.age}
    </li>
  );
};

export default FormItem;
