import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function FormPersonal() {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={user.cpf}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birth"
        value={user.birth}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        value={user.phone}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormPersonal;