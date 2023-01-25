import { useEffect, useState } from "react"

function UsersSection() {
  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data)=>{
      setUsers(data.results)
      
    })
  },[])
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
           
      <ul class="users-list">
        {users.map((user) =>{
           return (
              <li class={`${user.gender === "female" ? "bg-pink" : "bg-blue"}`}>
              <img
              src={user.picture.medium}
              alt="Ritthy Ryan"
              />
              <h3>{user.name.title} {user.name.first}{user.name.last}
              </h3>
              <p>Email: {user.email}</p>
              </li>
           )
           })}
      
      
       </ul>
      </div>
    </section>
  )
}

export default UsersSection
