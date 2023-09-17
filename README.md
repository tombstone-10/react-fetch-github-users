# Fetch API

This repository exhibits a simple use of fetch api and list rendering in react.

In this project we:

- setup state
- assign default to users
- fetch data component performs and use of fetch api
- it also use list rendering to iterate over all data entries in api and display them

```js
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
  fetchData();
}, []);
```

- we call fetch inside useEffect hook as it provides a safe place in case api or any problem occur while fetching
