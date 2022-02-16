// level {1/2/3}
// LEVEL 3
async function getUsers(users) {
    const new_users = [];
  
    for (let i = 0; i < users.length; i = i + 1) {
      const newUser = user[i];
      newUser.id = i;
  
      new_users.push(newUser);
    }
  
    return new_users;
  }
// optimized Code
  async  function  getUsers(users)
  {
      const new_users = users.map((user) =>{

        let new_user = user;
        new_user.id = i;

      })
  }