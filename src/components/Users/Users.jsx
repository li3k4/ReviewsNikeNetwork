import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
if(props.users.lenght === 0){
  props.setUsers( [
    { id: 0,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Dmitry",
      purchases: 1,
      location: { country: "Ukraine", city: "Kiev" },
      follow: false,
    },
    { id: 1,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Max Kovalcki",
      purchases: 3,
      location: { country: "UK", city: "London" },
      follow: true,
    },
    { id: 2,
      photo: "https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png",
      fullName: "Liam Trev",
      purchases: 4,
      location: { country: "US", city: "NY" },
      follow: false,
    },]
  )
   
}


  return (
    <div className={s.a}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={s.users_photo} src={u.photo}/>
            </div>
            <div>
              {u.follow 
              ? <button onClick = {() =>{props.unfollow(u.id)}}>Unfollow</button> 
              : <button onClick = {() =>{props.follow(u.id)}}>Follow </button>}
            </div>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.purchases}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </span>
        </div>
      ))}
      <button>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 10L14.1523 21.6632C14.55 22.1091 15.2473 22.1091 15.6449 21.6632L26.0473 10" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
      </button>
      
    </div>
  );
};

export default Users;
