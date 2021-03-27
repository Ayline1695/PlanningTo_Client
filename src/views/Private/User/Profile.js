import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../../context/AuthContext.utils";
import EditUser from "../../../components/FormModals/EditUser";
import { useProject } from "../../../context/ProjectContext";
import { deleteProject } from "../../../services/project.service";

function Profile() {
  const { user } = useAuth();

  const { projects, getProjects } = useProject();

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div className="perfil">
        <div>
          <img
            alt="profile img"
            src={user.imageUrl}
            style={{ width: "100px", borderRadius: "100%" }}
          />
          <h3>Profile</h3>
          {user.username}
        </div>
        <div>
          <EditUser />
        </div>
      </div>
      <div>
        <table
          align="center"
          cellSpacing="0"
          cellPadding="0"
          border="0"
          width="100%"
          className="projecto"
        >
          <tbody>
            {projects.map((p) => (
              <tr key={p._id}>
                <td>
                  <table
                    align="center"
                    cellSpacing="0"
                    cellPadding="0"
                    border="0"
                    width="100%"
                    className="projecto"
                  >
                    <tbody>
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
                          <p>{p.date}</p>
                        </td>
                        <td>
                          <button
                            onClick={async () => {
                              const remove = await deleteProject(p._id);
                              getProjects((state) =>
                                state.filter((proj) => proj.id === p._id)
                              );
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
