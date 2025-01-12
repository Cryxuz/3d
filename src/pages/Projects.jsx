import { Link } from 'react-router-dom'
import {projects} from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import {useState} from 'react'

const Projects = () => {

  const [modalStates, setModalStates] = useState(Array(projects.length).fill(false));

  const openModal = (index) => {
    setModalStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };
  
  const closeModal = (index) => {
    setModalStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };
  
  return (
    <section className="max-container">
      
      <h1 className="head-text">My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span></h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>These are the projects I hold closest to my heart. Most of them are open for public, feel free to view it on my Github.</p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className='lg:w-[400px] w-full'>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'> 
                <img 
                src={project.iconUrl}
                alt="Project Icon"
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link 
                    to={project.github_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                    >
                    Github Link
                  </Link>
                  <img 
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain'
                  />
                </div>
                {project.link && (
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link 
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                    >
                    Live Link
                  </Link>
                  <img 
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain'
                  />
                </div>
                )}
                {project.vid && (
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <button
                      className='font-semibold text-blue-600'
                      onClick={() => openModal(projects.indexOf(project))}
                    >
                      Video Demo
                    </button>
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                    {modalStates[projects.indexOf(project)] && (
                      <div className='z-10 fixed inset-0 flex items-center justify-center modal-overlay bg-slate-900'>
                        <div className='modal w-[90%] h-[90%] bg-gray-100 p-4 rounded-md pb-[5%]'>
                          <button className='font-semibold text-slate-900 mb-2' onClick={() => closeModal(projects.indexOf(project))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          </button>
                          <iframe src={project.vid} title='Modal Iframe' className='rounded-md w-full h-full' />
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
      <hr  className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default Projects