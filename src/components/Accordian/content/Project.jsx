import React from 'react'
import projectIcon from '../../../assets/project/project-icon.png'
import apiKeyIcon from '../../../assets/project/apikey-icon.png'
import LabelWithTopBorder from '../../common/LabelWithTopBorder';
import Input from '../../common/Input';
import AddButton from '../../common/AddButton';
import RemoveButton from '../../common/RemoveButton';
import Paragraph from "../../common/Text/Paragraph";
import Header from "../../common/Text/Header";

function generateApiKey() {
  return Math.random().toString(36).substring(2, 10);
}

function iconAndName(id, icon, name, className) {
  return (
    <div id={`${id}`} className={`m-4 b-4 justify-center grid grid-rows-2 ${className}`}>
      <img src={icon} alt={name} className='w-[50px] h-[50px] justify-self-center' />
      <h1 className='text-sm text-white justify-self-center'>{name}</h1>
    </div>
  );
}

export default function Project() {
  const id = generateApiKey();
  const [project, setProject] = React.useState('');
  const [apikeys, setApiKeys] = React.useState([iconAndName(id, apiKeyIcon, generateApiKey(), "fade-in")]);
  const [projects, setProjects] = React.useState([iconAndName(id, projectIcon, 'Project 1', "fade-in")]);
  const [ids, setIds] = React.useState([[id]]);
  
  function addNewProject(e) {
    e.preventDefault();
    const apiKey = generateApiKey();
    const newId = generateApiKey();
    const newProject = iconAndName(newId, projectIcon, project, 'slide-in');
    const newApiKey = iconAndName(newId, apiKeyIcon, apiKey, 'slide-in');

    setProjects(prevProjects => [...prevProjects, newProject]);
    setApiKeys(prevApiKeys => [...prevApiKeys, newApiKey]);
    setIds(prevIds => [...prevIds, newId]);

    setTimeout(() => {
      newProject?.classList?.remove('slide-in');
      newApiKey?.classList?.remove('slide-in');
    }, 1000); // Adjust timing as needed
  }

  function removeProject(idx) {
    const id = ids[idx];
    const item = document.getElementById(`${id}`);
    console.log(item)
      item.classList.add('slide-out');
      setTimeout(() => {
        setProjects(projects => projects.filter((_, index) => index !== idx));
        setApiKeys(apikeys => apikeys.filter((_, index) => index !== idx));
        setIds(ids => ids.filter((_, index) => index !== idx));
      }, 200);
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
                  <RemoveButton handler={removeProject} index={index} />
                  
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
          <Input placeholder="Project Name" handler={setProject} />
          <AddButton onclick={addNewProject} />
        </form>
    </div>
  )
}
