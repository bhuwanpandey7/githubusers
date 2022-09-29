import React, { useState, useEffect } from 'react';
import './GithubUsers.css';

function GithubUsers() {

  const [userData, setUserData] = useState([]);

  const getGithubUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const gitHubData = await response.json();
    setUserData(gitHubData)
  }

  useEffect(() => {
    getGithubUsers();
  }, [])


  return (
    <section className='container-fluid'>
      <section className='row text-center' style={{ backgroundColor: "currentColor" }}>
        <section className='p-4 personal'>
          <ul className='d-flex col-4 flex-row justify-content-between personal__details' style={{ listStyle: "none", textDecoration: "none" }}>
            <li><a href="https://bhuwancodes.netlify.app/" target="_blank" rel="noopener noreferrer">Contact Me</a></li>
            <li><a href="https://github.com/bhuwanpandey7" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://medium.com/@bp-pandey7" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="https://www.linkedin.com/in/bhuwan-pandey/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </section>
        <h1 style={{ color: 'salmon' }}>GitHub Users</h1>
        {
          userData.map(user => {
            return (
              <section key={user.id} className='col-10 col-md-3 mt-4'>
                <section className='card p-2 userData' style={{ backgroundColor: "antiquewhite", width: "295px", padding: "1rem" }}>
                  <section className="d-flex align-items center" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <section className="d-flex image">
                      <section className='d-flex flex-column'>
                        <img src={user.avatar_url} alt="Github User" className='rounded' width={150} />
                        <h4 className="mb-0 mt-0 textLeft text-dark pt-3">{user.login.toUpperCase()}</h4>
                      </section>
                      <section className='w-100 ml-3 p-2'>
                        <span className="textLeft"></span>
                        <section>
                          <section className="d-flex flex-column">
                            <span className='articles'>Profile</span>
                            <a href={user.html_url} target="_blacnk" link="noreferrer" className='first profile'>{user.login}</a>
                          </section>
                          <section className="d-flex flex-column">
                            <span className='followers'>Type</span>
                            <span className='second profile'>{user.type}</span>
                          </section>
                          <section className="d-flex flex-column">
                            <span className='rating'>Site Admin</span>
                            <span className='third profile'>{`${user.site_admin ? 'No' : 'Yes'}`}</span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            );
          })
        }
      </section>

    </section>
  );
}

export default GithubUsers