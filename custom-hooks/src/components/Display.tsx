


import { useFormContext } from 'react-hook-form'

const Display=()=>{
       const {getValues}=useFormContext();
       const {username,age,phonenumber,email}=getValues();
return<>
<h1>Hello</h1>
<p>{username}</p>
<p>{age}</p>
<p>{phonenumber}</p>
<p>{email}</p>
</>
};
export default Display;