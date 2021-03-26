import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../../context/AuthContext.utils";
import Projects from "../Projects/Project";
import { useProject } from "../../../context/ProjectContext";
import { deleteProject } from "../../../services/project.service";

function Profile() {
  const { user } = useAuth();
  console.log("USER: ", user);

  const { projects, getProjects } = useProject();

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div className="perfil">
        <img
          alt="profile img"
          src={user.imageUrl}
          style={{ width: "100px", borderRadius: "100%" }}
        />
        <h3>Profile</h3>
        {user.username}
      </div>
      <div>
        {projects.map((p, idx) => (
          <tr key={p._id}>
            <td>
              <table
                align="center"
                cellsPacing="0"
                cellPadding="0"
                border="0"
                className="projecto"
              >
                <tr>
                  <td className="imageproject">
                    <img
                      alt={p.title}
                      src={p.imageUrl ? p.imageUrl : "./base.jpg"}
                    />
                  </td>
                  <td>
                    <Link to={`/project/${p._id}`}>
                      <h3>{p.title}</h3>
                    </Link>
                  </td>
                  <td>
                    <p>{p.description}</p>
                  </td>
                  <td>
                    <p>{p.date}</p>
                  </td>
                  <td>
                    <button
                      onClick={async () => {
                        const remove = await deleteProject(p._id);
                        console.log("removed Project", remove);
                        getProjects((state) =>
                          state.filter((proj) => proj.id === p._id)
                        );
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Profile;
