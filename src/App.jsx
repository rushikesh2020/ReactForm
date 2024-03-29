import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName : '',
      lastName : '',
      email : '',
      comments : ''
    }
  )

  function handleChange(event){
    // console.log(event.target.value)
    // console.log(event.target.name)
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        //ES6 feature that allows computed value to be key of a property
        //just need to wrap computed value in square bracket []
        [event.target.name] : event.target.value
      }
    })
  }

  console.log(formData)

  return (
    <form>
      <input 
        type="text" 
        placeholder="First Name" 
        onChange={handleChange} 
        name='firstName' 
        value={formData.firstName}
      />
      <input 
        type="text" 
        placeholder='Last Name' 
        onChange={handleChange} 
        name='lastName' 
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      
    </form>
  );
}

export default App;
