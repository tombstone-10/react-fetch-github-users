import { useEffect, useState } from "react";

// api url
const url = "https://api.github.com/users";

const FetchData = () => {
  //useState hook for users and setting them
  const [users, setUsers] = useState([]);

  //   fetching inside useEffect for code safety
  //   useEffect has two parameters, one the callback and other an empty array for dependency so that it only works on initial render
  //   using async and await as we are using promise based api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    // calling function
    fetchData();
  }, []);

  return (
    <section>
      <h2>Using Fetch API</h2>
      <h3>GitHub Users</h3>

      {/* rendering list by map function to iterate over all entries */}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="blank">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
