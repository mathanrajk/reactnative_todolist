import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Appbar from './components/Appbar'
import Card from './components/Card';
const App = () => {
  const [totaldata, settotaldata] = useState<Array<{id:number, text: string}>>([]);
  const taskdetails =(texts:string)=>{
    settotaldata((prev)=>[...prev,{id:totaldata.length+1,text :texts}]);
  }

  const deletehandler =(id :number)=>{
      
        const objectIdToDelete = id;
       const filterdata = totaldata.filter(obj => obj.id !== objectIdToDelete); 
       settotaldata(filterdata)  
  }
  return (
    <View>
    <Appbar textDetails={taskdetails}/>  
    {
      totaldata.map((item,index)=>{
        return <Card  key={index} id={item.id} text={item.text} deletedetails={deletehandler}/>
      })
    }
    </View>
  )
}

export default App