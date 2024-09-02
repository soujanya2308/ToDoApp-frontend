import axios from 'axios'

const baseUrl ="https://todoapp-backend-jg4k.onrender.com"

const getAllToDo = (setToDo) => {
   axios 
  .get(baseUrl)
  .then(({data}) => {
    console.log('data --->',data);
    setToDo(data)
   })
}
const addToDo = (text, setText ,setToDo) => {
   axios
   .post(`${baseUrl}/save`, {text})
   .then((data) => {
     console.log(data)
     setText("")
     getAllToDo(setToDo)
   })
   .catch((err) => 
    console.log(err))
}

    const updateToDo = (toDoId,text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, { _id: toDoId,text }) // Correct template literal usage
    .then((data) => {
      
        setText("") // Clear the input field or any state holding the text
        setIsUpdating(false) // Indicate that the update operation is complete
        getAllToDo(setToDo) // Refresh the to-do list by fetching all to-dos
    })
    .catch((err) => 
        console.log(err));
}


const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err));
}

export { getAllToDo, addToDo ,updateToDo ,deleteToDo }