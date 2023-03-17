import React, { useState } from 'react';

function Form(props) {

    const [username, setUserName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username:", username);
        setUserName("")

        //call api
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`https://api.github.com/users/${username}`, requestOptions)
          .then(response => response.json())
          .then(result => props.setDisplayData(result))
          .catch(error => console.log('error', error));

    };

  return (
    //Form and button
    <form onSubmit={handleSubmit}> 
        <input type="text" 
        placeholder="Enter a name..." 
        className='user-input' 
        value={username} 
        onChange={(event) => {
            setUserName(event.target.value)
        }} />
        <input type="submit" value="Add Card" />
   </form>
  );
}

export default Form;