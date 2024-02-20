import { useSelector } from "react-redux"; 
import store from '../features/store/store.js'

export const useUser=()=>{
const user=useSelector(store=>store.auth.user)
return user;
}