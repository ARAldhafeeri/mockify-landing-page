import React from 'react'
import Input from '../../../common/Input'
import AddButton from '../../../common/AddButton'

export default function AccessControls({content, setContent}) {
    const [role, setRole] = React.useState('')
    const [action, setAction] = React.useState('')
    const [entity, setEntity] = React.useState('')

    const addNewPerson = (e) => {
      e.preventDefault()
        setContent([...content, {role, actions : [action], entities: [entity]}])
    }
    return (
    <form className="flex flex-row mb-5">
      <Input type='text' name="role name" placeholder='Role name'  handler={setRole}/>
      <Input type='text' name="lastName" placeholder='Action' handler={setAction} />
      <Input type='number' name="age" placeholder='Resource' handler={setEntity} />
      <AddButton onclick={addNewPerson} />
    </form>
  )
}
