import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./UserCommits.module.scss";

const UserCommits = () => {
  const project = useSelector((state) => state.commit.data);
  const navigate = useNavigate();

  const returnBack = () => {
    navigate("/user");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.table}>
        <table className="w-full">
          <thead>
            <tr>
              <th>Автор</th>
              <th>хеш коммита</th>
              <th>Дата год.месяц.день</th>
            </tr>
            {project &&
              project.map((project, index) => (
                <tr key={index}>
                  <td>{project.commit.author.name}</td>
                  <td>{project.sha}</td>
                  <td>{project.commit.author.date.substr(0, 10)}</td>
                  {/* формат MM/DD/YYYY {new Date(project.commit.author.date).toLocaleDateString()} */}
                </tr>
              ))}
          </thead>
        </table>
      </div>
      <button className={styles.button} onClick={() => returnBack()}>
        Назад
      </button>
    </div>
  );
};

export default UserCommits;
