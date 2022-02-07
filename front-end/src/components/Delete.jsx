import React from "react";
import { useState } from "react";

/*
for deleting testcase
it shows a success message if the deletation was successful
*/

const Create = () => {
  const [id, setId] = useState("");

  const [message, setMessage] = useState(false);

  const deleteRequestHandler = async () => {
   
    const response = fetch('http://127.0.0.1:8000/api/testcases/' + id, {
        method: 'DELETE',
        
    })
    if(response) {
        setMessage(true)
    }
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter id here"
      />
      <button onClick={deleteRequestHandler}>Insert</button>
      <hr />
      {message ? <h3>Data deleted succesfully!</h3>:null}
    </div>
  );
};
 
export default Create;