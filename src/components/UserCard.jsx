import {useState} from 'react'


export function UserCard() {

  const [enabled, setEnabled] = useState(false);

  const usersEnabled = enabled ? 'Ocultar usuarios' : 'Mostrar usuarios'

  const showUsers = () => {
    setEnabled(!enabled);
  }

  return (
  <>
    <h1>Hola mundo</h1>

    <button onClick={() => showUsers()}>
      {usersEnabled}
    </button>

          
  </>
)

}