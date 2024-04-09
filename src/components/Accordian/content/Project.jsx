import React from 'react'
import projectIcon from '../../../assets/project/project-icon.png'
import apiKeyIcon from '../../../assets/project/apikey-icon.png'


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
              <div className='bg-[#000300] border-t-2 mb-1 mt-2 border-t-green1 w-[200px] h-[40px] ml-5 flex items-center font-medium rtl:text-right  focus:border-l-green1  mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105'>
              <h1 className="md:text-2xl text-1xl ml-10  text-white">Project</h1>
              </div>
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
              <div className='bg-[#000300] border-t-2 mb-1 mt-2 border-t-green1 w-[200px] h-[40px] ml-5 flex items-center font-medium rtl:text-right  focus:border-l-green1  mt-2  dark:focus:ring-[#00df9a] hover:bg-[#00df9a] gap-5 transition-transform duration-300 hover:shadow-3xl hover:scale-105'>
                <h1 className="md:text-2xl text-1xl ml-10  text-white">API Key</h1>
              </div>
              <div className='m-4 b-4'>
                {apikeys.map((item) => (
                  item
                ))}
              </div>
          </div>
      </div>
        <form className='flex justify-center'> 
          <input  onChange={(e) => setProject(e.target.value)} className='bg-green1 rounded-lg  border-none text-white h-[40px] hover:bg-[#000300]  focus:border-t-black '/>
          <button  className="flex justify-center ml-2 bg-green1 rounded-lg items-center  h-[40px] hover:bg-[#000300] " type="submit" onClick={addNewProject}>
            <label className="md:text-1xl text-1xl w-10 justify-self-center  text-white">+</label>
          </button>
        </form>
    </div>
  )
}
