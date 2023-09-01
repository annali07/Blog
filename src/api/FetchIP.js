// import React, { useState, useEffect } from "react";

// // a function to be implemented
// export default function FetchIP() {
//   const [userTime, setUserTime] = useState("");
//   const [userTimezone, setUserTimezone] = useState();

//   useEffect(() => {
//     fetch("http://ip-api.com/json/?fields=3195137")
//       .then((res) => res.json())
//       .then((res) => {
//         setUserTimezone(res.timezone);

//         const date = new Date();

//         const utime =  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: userTimezone }).format(date);

//         setUserTime(utime)
//       });
//   });


//   // useEffect(() => {
//   //   const options = {
//   //     timeZone: userTimezone,
//   //     weekday: "long",
//   //     year: "numeric",
//   //     month: "long",
//   //     day: "numeric",
//   //     hour: "numeric",
//   //     minute: "numeric",
//   //     second: "numeric",
//   //   };

//   //   fetch('http://ip-api.com/json/?fields=3195137')
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       console.log(res.timezone)
//   //       setUserTimezone(res.timezone);
//   //       const localTime = new Date().toLocaleString(undefined, options);
//   //       setUserTime(localTime); 
//   //     });
//   // }, [userTimezone]);
  
//   const date = new Date(userTime);
//   const userHour = date.getHours();

//   return (
//     <div>
//       {console.log(userHour)}
//       <p>Visitor's Local Time: {userHour}</p>
//     </div>
//   );
// }
