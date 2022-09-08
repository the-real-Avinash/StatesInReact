import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const UseEffectsAPI = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getUsers = async () => {
    try{
        // setLoading(false);
    const response = await fetch("https://api.github.com/users");
    // console.log(response);
    setUsers(await response.json());
    }catch(error){
        console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if(Loading){
    return <Loading/>
  }
  return (
    <>
      <h1>List of Github Users</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((ele) => {
            return (
              <div>
                <div className="col-10 col-md-4 mt-5" key={ele.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img src={ele.avatar_url} className="rounded" width="155" />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{ele.login}</h4>
                        <span className="textLeft">Web Developer</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between-rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span>
                            <span className="number1">38</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="followers">Followers</span>
                            <span className="number2">980</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="rating">Rating</span>
                            <span className="number3">8.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectsAPI;
