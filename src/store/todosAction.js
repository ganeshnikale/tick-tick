import todosSlice, { todosSliceAction } from "./todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { firestore, convertCollectionMap } from "../utils/firebase";
import { fetchProject } from "./projectsAction";
const { v4: uuidv4 } = require("uuid");

export const fetchTodos = (userID) => {
  return async (dispatch) => {
    // const allTodos = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${userID}.json`).then(x => x.json()).then(y => y);
    let todosList = null;
    let ProjectList = null;
    // for(let id in allTodos) {
    //     todosList.push(allTodos[id])
    // }
    //dispatch(todosSliceAction.setTodo({todos: todosList}));
    const todoStoreRef = firestore.collection("todos");
    const projectStoreRef = firestore.collection("projects");

    todoStoreRef.where("userId", "==", userID).onSnapshot(async (snapshot) => {
      todosList = snapshot.docs.map((x) => x.data());

      projectStoreRef
        .where("userId", "==", userID)
        .onSnapshot(async (snapshot) => {
          ProjectList = snapshot.docs.map((x) => x.data());

          let taskProjectMerge = await mergeById(todosList, ProjectList);
          await dispatch(todosSliceAction.setTodo({ todos: taskProjectMerge }));
        });
    });

    //todoStoreRef.where("userId", "==", 1).get().then(x => {x.docs.map( y => console.log(y.data()))})
    // const query = todoStoreRef.isEqual("userId", 3);
  };
};

const mergeById = (array1, array2) =>
  array1.map((itm) => ({
    ...array2.find((item) => item.projectId === itm.projectId && item),
    ...itm,
  }));

export const AddTodo = (todoData) => {
  console.log(todoData)
  const date = new Date();
  return async (dispatch) => {
    const todoStoreRef = firestore.collection("todos").doc();
    await todoStoreRef.set({
      projectId: todoData.projectId,
      todoId: todoStoreRef.id,
      status: "backlog",
      text: todoData.todoText,
      discription: todoData.todoDicscription,
      createAt: date.toISOString(),
      userId: todoData.uid,
    });

    dispatch(
      todosSliceAction.addTodos({
        pushTodos: {
          projectId: todoData.projectId,
          todoId: todoStoreRef.id,
          status: "backlog",
          text: todoData.todoText,
          discription: todoData.todoDicscription,
        },
      })
    );
  };
};

export const ChangeStatus = (status) => {
  return async (dispatch) => {
    let statusId = new Array();
    statusId = status.split(",");

    const todoStoreRef = firestore.collection("todos");
    await todoStoreRef.doc(statusId[0]).update({ status: statusId[1] });

    //dispatch(todosSliceAction.changeStatus(statusId))
  };
};

export const filterTodos = (projectName) => {
  return async (dispatch) => {
    await dispatch(todosSliceAction.filterTodosReducer(projectName));
  };
};

export const filterByStatus = (status) => {
  return async (dispatch) => {
    await dispatch(todosSliceAction.filterByStatusReducer(status));
  };
};


export const getTaskDetails = (taskId) =>{
  return async(dispatch) =>{
    await dispatch(todosSliceAction.taskDetail(taskId))
  }
}