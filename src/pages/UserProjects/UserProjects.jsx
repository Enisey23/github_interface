import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchCommit } from "../../redux/slice/Commit/fetchCommit";

import styles from "./UserProjects.module.scss";

const UserProjects = () => {
  const user = useSelector((state) => state.user.data);
  const project = useSelector((state) => state.project.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProjectCommit = (projectName) => {
    dispatch(fetchCommit([user.login, projectName]));
    navigate("/user/commit");
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.parent}>
      <div>
        <img src={user.avatar_url} alt="Avatar" className={styles.avatar} />
        <h1>{user.login}</h1>
      </div>
      <div className={styles.table}>
        <table className="w-full">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Язык программирования</th>
              <th>Описание</th>
              <th>Количество звёзд</th>
            </tr>
            {project.map((project, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => getProjectCommit(project.name)}>
                    {project.name}
                  </button>
                </td>
                <td>{project.language}</td>
                <td>{project.description}</td>
                <td>{project.stargazers_count}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default UserProjects;
