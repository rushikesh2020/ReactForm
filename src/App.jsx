import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');

  /**
   * Challenge: update the firstName state on every keystroke
   */

  function handleChange(event) {
    setFirstName(event.target.value);
  }
  console.log(firstName);

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
}

export default App;
