import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PersonPreview from "../profilePreview/ProfilePreview";

// const personListContainer = styled.div`
// //todo
// `;
const ProfileList = () => {
  const [people, setPeople] = useState([]); //this will hold the people list fetched from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   await fetch("https://saytheirnames.dev/api/people")
    //                     .then(response => response.json())
    //                     .then(data =>{
    //                      setPeople(data.data);
    //                     });
    //                         setLoading(false)
  }, []);
  return "ass";
  //    const renderPerson = (person, idx) => {

  //         return (
  //             <li key={idx} style = {{display: 'inline'}}>
  //                 <PersonPreview source = {person.images[0].image_url} name = {person.full_name} date = {person.date_of_incident}/>
  //             </li>
  //         );
  //       }
  //     const showPeopleList = () =>{
  // ​
  //         return(

  //                 <FlatList
  //                   list={people}
  //                   renderItem={renderPerson}
  //                   renderWhenEmpty={() => <div></div>}
  //                   sortBy={["id", {key: "person_id", descending: false}]}
  //                   display={{
  //                     grid: true,
  // ​
  //                   }}
  //                 />

  //         )
  //     }

  //     if(!loading)
  //     {

  //           return(
  //                   <ul style={{listStyleType:'none', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
  //                      {showPeopleList()}
  //                  </ul>

  // ​
  //         )

  //     }
  //     else
  //     {
  //         return(
  //             <div>
  // ​
  //             </div>
  //         )
  //     }
};
export default ProfileList;
