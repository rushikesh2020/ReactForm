import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName : '',
      lastName : '',
      email : '',
      comments : '',
      isFriendly : true
    }
  )

  const CheckBoxStyle={
    display: "inline",
    marginRight: "0.75rem"
  }

  function handleChange(event){
    //destructuring event.target object
    const {name, value, type, checked} = event.target
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        //ES6 feature that allows computed value to be key of a property
        //just need to wrap computed value in square bracket []
        [name] : type ==='checkbox'? checked : value
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
      <textarea 
        onChange={handleChange}
        name='comments'
        placeholder='Comments'
        value={formData.comments}
      />
      <input style={CheckBoxStyle}
        type='checkbox'
        id='isFriendly'
        checked = {formData.isFriendly}
        onChange={handleChange}
        name='isFriendly'
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br/>

    </form>
  );
}

export default App;
