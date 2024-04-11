import React from 'react'
import Input from '../../../common/Input'
import AddButton from '../../../common/AddButton'

export default function DataControls({content, setContent}) {
    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [age, setAge] = React.useState('')

    const addNewPerson = (e) => {
      e.preventDefault()
        setContent([...content, {firstName: firstname, lastName: lastname, age: age, avatar: 'https://www.w3schools.com/w3images/avatar2.png'}])
    }
    return (
    <form className="flex flex-row">
      <Input type='text' name="firstName" placeholder='First Name'  handler={setFirstname}/>
      <Input type='text' name="lastName" placeholder='Last Name' handler={setLastname} />
      <Input type='number' name="age" placeholder='Age' handler={setAge} />
      <AddButton onclick={addNewPerson} />
    </form>
  )
}
