import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName : '',
      lastName : '',
      email : '',
      comments : '',
      isFriendly : true,
      employment: ''
    }
  )

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
      {/* checkbox */}
      <input 
        type='checkbox'
        id='isFriendly'
        checked = {formData.isFriendly}
        onChange={handleChange}
        name='isFriendly'
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br/>
    {/* radio buttons */}
      <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

    </form>
  );
}

export default App;
