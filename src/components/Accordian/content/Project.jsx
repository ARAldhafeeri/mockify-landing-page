import React from 'react'
import projectIcon from '../../../assets/project/project-icon.png'
import apiKeyIcon from '../../../assets/project/apikey-icon.png'
import LabelWithTopBorder from '../../common/LabelWithTopBorder';

function generateApiKey() {
  return Math.random().toString(36).substring(2, 10);
}

function iconAndName(icon, name){
  return (
    <div className='flex m-4 b-4 justify-center grid grid-rows-2'>
      <img src={icon} alt={name} className='w-[50px] h-[50px] justify-self-center' />
      <h1 className='text-sm text-white justify-self-center'>{name}</h1>
    </div>
  )
}

export default function Project() {
  const [project, setProject] = React.useState('');
  const [apikeys, setApiKeys] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
 
  function addNewProject(e) {
    e.preventDefault();
    const apiKey = generateApiKey();
    setApiKeys([...apikeys, iconAndName(apiKeyIcon, apiKey)]);
    setProjects([...projects, iconAndName(projectIcon, project)]);
  }

  function removeProject(idx) {
    setProjects(projects.filter((item, index) => index !== idx));
    setApiKeys(apikeys.filter((item, index) => index !== idx));
  }

  return (
    <div className="grid grid-rows-2">
      <div className=" mx-auto m-5 p-5 md:grid md:grid-cols-3 grid grid-cols-1">
          <div className='justify-self-center mx-auto'>
              <LabelWithTopBorder text="Project" />
              <div className='m-4 b-4'>
                {projects.map((item, index) => (
                  <div className='relative'> 
                  {item}
                  <button  className=" absolute top-0 right-0 justify-center ml-2 bg-green1 rounded-lg items-center  w-[20px] h-[20px] hover:bg-[#000300] " type="submit" onClick={() => removeProject(index)}>
                    <label className="md:text-1xl text-1xl w-10 justify-self-center  text-white">-</label>
                  </button>
                  
                  </ div>
                ))}
              </div>
          </div>
          <div className='justify-self-center'>
              <LabelWithTopBorder text="API Key" />
              <div className='m-4 b-4'>
                {apikeys.map((item) => (
                  item
                ))}
              </div>
          </div>
      </div>
        <form className='flex justify-start ml-10'> 
          <input  onChange={(e) => setProject(e.target.value)} className='bg-green1 rounded-lg  border-none text-white h-[40px] hover:bg-[#000300]  focus:border-t-black '/>
          <button  className="flex justify-center ml-2 bg-green1 rounded-lg items-center  h-[40px] hover:bg-[#000300] " type="submit" onClick={addNewProject}>
            <label className="md:text-1xl text-1xl w-10 justify-self-center  text-white">+</label>
          </button>
        </form>
    </div>
  )
}
