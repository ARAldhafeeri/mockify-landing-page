import React, { useEffect } from 'react'
import Input from '../../../common/Input'
import AddButton from '../../../common/AddButton'
import Select from '../../../common/Select'
import { createNode } from './EntityRelationalDiagram'
import { createLink } from './EntityRelationalDiagram'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


export default function Controls({content, setContent}) {
  const [entity, setEntity] = React.useState('');
  const [fromNode, setFromNode] = React.useState('');
  const [toNode, setToNode] = React.useState('');
  const [label, setLabel] = React.useState('');

  console.log(fromNode, toNode, label)
  const handleAddNode = () => {
    const node = createNode(entity, random(0, 400), random(0, 400));
    setContent([...content, node]);
  }

  const handleAddLink = () => {
    const sourceNode = content.find(node => node.options.name === fromNode);
    const targetNode = content.find(node => node.options.name === toNode);
    console.log(sourceNode, targetNode)
    const link = createLink(sourceNode, targetNode, label);
    setContent([...content, link]);
  }

  return (
    <div className='m-5'>
      <div className='flex flex-row ml-7'>
        <Input type='text' placeholder='Entity name'  handler={setEntity}/>
        <AddButton onclick={handleAddNode} />
      </div>
      <div className='flex flex-row justify-evenly m-5'>
        <Select options={content} handler={setFromNode} />
        <Select options={content} handler={setToNode} />
        <Input type='text' placeholder='label' handler={setLabel} />
        <AddButton onclick={handleAddLink} />
      </div>

    </div>
    )
}
