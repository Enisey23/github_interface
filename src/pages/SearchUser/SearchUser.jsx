import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProject } from "../../redux/slice/Project/fetchProject";
import { fetchUser } from "../../redux/slice/User/fetchUser";
// import debounce from "lodash.debounce";

import styles from "./SearchUser.module.scss";

const SearchUser = () => {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLogin = async (login) => {
    const userData = await dispatch(fetchUser(login));
    const projectData = await dispatch(fetchProject(login));

    if (!userData.payload) {
      return alert(
        "Не удалось найти пользователя, попробуйте найти другого пользователя"
      );
    }

    if (projectData.payload) {
      return navigate("/user");
    }

    return alert("Не удалось получить проекты пользователя");
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Поиск пользователя github</h1>
      <input
        placeholder="Имя пользователя"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className={styles.button} onClick={() => getLogin(email)}>
        Поиск
      </button>
    </div>
  );
};

export default SearchUser;
