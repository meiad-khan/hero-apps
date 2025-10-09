import { toast } from "react-toastify";

export const getData = ()=>{
  const data = localStorage.getItem('appList');
  return data? JSON.parse(data) : [];
}

export const setData = app =>{
  const appList = getData();
  const isDuplicate = appList.some(p=>p.id===app.id);
  if(isDuplicate) return toast('This Apps is already Installed');
  const updatedList = [...appList, app]
  localStorage.setItem('appList', JSON.stringify(updatedList))
}

export const removeData = id =>{
const appList = getData();
const updatedList = appList.filter(app=> app.id!==id)
localStorage.setItem('appList', JSON.stringify(updatedList));
}