import {todosSliceAction} from './todosSlice';
import { useSelector,useDispatch } from 'react-redux';
import { firestore, convertCollectionMap } from '../utils/firebase';
import {fetchProject} from './projectsAction';




export const fetchTodos = (userID) => {
   
    return async(dispatch) => {
        
        
       // const allTodos = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${userID}.json`).then(x => x.json()).then(y => y);
        let todosList = null;
        let ProjectList = null;
        // for(let id in allTodos) {
        //     todosList.push(allTodos[id])
        // }
         //dispatch(todosSliceAction.setTodo({todos: todosList}));
        const todoStoreRef =  firestore.collection('todos');
        const projectStoreRef = firestore.collection('projects');

        
      

        todoStoreRef.where("userId", "==", userID).onSnapshot( async snapshot => {
             todosList =  snapshot.docs.map(x => x.data());
            

             projectStoreRef.where("userId", "==",  userID).onSnapshot( async snapshot => {
                ProjectList = snapshot.docs.map(x => x.data())
              
                 let taskProjectMerge = await mergeById(todosList, ProjectList);
                 await dispatch(todosSliceAction.setTodo({todos: taskProjectMerge}));
            } );
        });
        
        

        //todoStoreRef.where("userId", "==", 1).get().then(x => {x.docs.map( y => console.log(y.data()))})
        // const query = todoStoreRef.isEqual("userId", 3);
        // console.log(query);
        
    }
}



  const mergeById = (array1, array2) =>
    array1.map(itm => ({
      ...array2.find((item) => (item.projectId === itm.projectId) && item),
      ...itm
    }));
  


export const AddTodo = (todoData) => {
    
    return async(dispatch) => {
        const date = new Date();
        const todoStoreRef =  firestore.collection('todos').doc();
        await todoStoreRef.set({
            "projectId": todoData.projectId, "status": "pending", text: todoData.todoText,discription:todoData.todoDicscription, createAt: date.toISOString(), userId: todoData.uid
        })

        dispatch(todosSliceAction.addTodos({pushTodos:{"projectId": todoData.projectId, status: "pending", text: todoData.todoText,discription:todoData.todoDicscription}}))

    }
}