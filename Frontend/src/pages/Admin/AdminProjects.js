import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form,message } from 'antd';
import { ShowLoading, HideLoading, ReloadData } from '../../redux/rootSlice'
import axios from "axios"

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectItemForEdit, setSelectItemForEdit] = React.useState(null);
  const[type,setType] = React.useState("add")


  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      let response 
      if(selectItemForEdit){
        response = await axios.post("https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/update-project",{
          ...values,
          _id:selectItemForEdit._id,
        })
        
      }else{
        response= await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/add-project',
        {
          ...values,
          
        }
      )
      }
     
      dispatch(HideLoading())
      if (response.data.success) {
        console.log(response)
        message.success(response.data.message)
        setShowAddEditModel(false)
        setSelectItemForEdit(null)
        dispatch(HideLoading())
        dispatch(ReloadData(true))
      } else {
        message.error(response.data.message)
        console.log("hello in Else")
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
      console.log("Hello in Catch")
    }
  }


  const onDelete = async (Item)=>{
    try {
      const response = await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio//delete-project',{
        _id:Item._id,
      });
      dispatch(HideLoading());
      if(response.data.success){
        message.success(response.data.message);
        dispatch(HideLoading())
        dispatch(ReloadData(true));
      }else{
        message.error(response.data.message)
      }
        
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }






  return (
    <div>

      <div className='flex justify-end'>
        <button className='bg-primary px-5 py-2 text-white mb-5'
          onClick={() => {
            setSelectItemForEdit(null);
            setShowAddEditModel(true);
          }}
        >Add project
        </button>

      </div>



      <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5'>
        {projects.map((project) => (
          <div className='shadow border p-5 border-gray-400'>

            <img src={project.image} alt='Not Uploaded' className='h-60 w-80'/>
       
            <h1>Title : {project.title}</h1>
            <h1>{project.description}</h1>
            <div className='flex justify-end gap-4 mt-5'>
              <button className='bg-secondary text-white px-5 py-2' onClick={()=>{
                onDelete(project)
              }}>Delete</button>
              <button className='bg-primary text-white px-5 py-2' onClick={()=>{
                setSelectItemForEdit(project);
                setShowAddEditModel(true);
                setType("Edit");
              }}>Edit</button>
            </div>

          </div>
        ))}


      </div>


      {
        (type === 'add' || selectItemForEdit) && <Modal
        open={showAddEditModel}
        title={selectItemForEdit ? "Edit project" : "Add project"}
        footer={null}
        onCancel={() => {
          setShowAddEditModel(false)
        }}

      >
        <Form layout='vertical' onFinish={onFinish} initialValues={selectItemForEdit}>
          <Form.Item name="title" label="Title">
            <input placeholder='Title' />


          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder='Description' />


          </Form.Item>
          <Form.Item name="image" label="Image">
            <input placeholder='Image' />
          </Form.Item>


          <Form.Item name="gitHubLink" label="GitHubLink">
            <input placeholder='GitHubLink' />


          </Form.Item>
          <Form.Item name="previewLink" label="PreviewLink">
            <input placeholder='PreviewLink' />


          </Form.Item>
          <div className='flex justify-end'>
            <button className='border-primary text-primary px-5 py-2 ms-5 ' type='button' onClick={() => {
              
              setShowAddEditModel(false)
            }}>
              Cancle </button>

           
            <button className='bg-primary text-white px-5 py-2 ms-5 ' type='submit'>
              {selectItemForEdit ? "Update" : "Add"}
            </button>

          </div>


        </Form>


      </Modal>
      }


    </div>
  )
}

export default AdminProjects