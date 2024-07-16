import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form,message } from 'antd';
import { ShowLoading, HideLoading, ReloadData } from '../../redux/rootSlice'
import axios from "axios"

function AdminExpiriences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectItemForEdit, setSelectItemForEdit] = React.useState(null);
  const[type,setType] = React.useState("add")


  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      let response 
      if(selectItemForEdit){
        response = await axios.post("https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/update-experience",{
          ...values,
          _id:selectItemForEdit._id,
        })
        
      }else{
        response= await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/add-experience',
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
      const response = await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio//delete-experience',{
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
        >Add Experience
        </button>

      </div>



      <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-full'>
        {experiences.map((experience) => (
          <div className='shadow border p-5 border-gray-400'>

            <h1 className='text-secondary text-xl font-bold'>{experience.period}</h1>
            <h1> Company : {experience.company}</h1>
            <h1>Role : {experience.title||"Web Developer"}</h1>
            <h1>{experience.description}</h1>
            <div className='flex justify-end gap-4 mt-5'>
              <button className='bg-secondary text-white px-5 py-2' onClick={()=>{
                onDelete(experience)
              }}>Delete</button>
              <button className='bg-primary text-white px-5 py-2' onClick={()=>{
                setSelectItemForEdit(experience);
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
        title={selectItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => {
          setShowAddEditModel(false)
        }}

      >
        <Form layout='vertical' onFinish={onFinish} initialValues={selectItemForEdit}>
          <Form.Item name="period" label="Period">
            <input placeholder='Period' />


          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder='Company' />


          </Form.Item>
          <Form.Item name="title" label="Role">
            <input placeholder='Role' />


          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder='Description' />


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

export default AdminExpiriences