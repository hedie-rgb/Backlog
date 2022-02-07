import React from "react";
import { useState } from "react";

/*
for creating testcase
it shows a success message if the insertion was successful
*/

const Create = () => {
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const [group, setGroup] = useState("");
  const [path, setPath] = useState("");

  const [message, setMessage] = useState(false);

  const postRequestHandler = async () => {
    const data = { name, version, group, path };
   
    const respone = fetch('http://127.0.0.1:8000/api/testcases', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
        	'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    if(respone) {
        setMessage(true)
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insert name here"
      />
      <input
        type="text"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        placeholder="Insert version here"
      />
      <input
        type="text"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        placeholder="Insert group here"
      />
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        placeholder="Insert path here"
      />
      <button onClick={postRequestHandler}>Insert</button>
      <hr />
      {message ? <h3>Data inserted succesfully!</h3>:null}
    </div>
  );
};
 
export default Create;