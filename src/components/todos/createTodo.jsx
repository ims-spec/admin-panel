import { Create, SimpleForm, TextInput, DateInput, SelectInput, BooleanInput, ReferenceInput } from 'react-admin'
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { RichTextInput } from 'ra-input-rich-text'
import { useEffect } from 'react'




export default function createTodo() {
  
  const tgBot = import.meta.env.VITE_TG_TOKEN
  const chatID = import.meta.env.VITE_TG_CHAT_ID
  useEffect(()=>{
    async function sendData(){
      
    try{
      const res = await fetch(`https://api.telegram.org/bot${tgBot}/sendMessage?chat_id=[CHANNEL_NAME]&text=Test`)
      if(!res.ok){
        throw new Error(`Response status: ${res.status}`)
      }
    } catch{
      console.log()
    }
    
  }
    sendData()
  }, [])


  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        {/* <RichTextInput
          source="todo"
          size="large"
          multiline={true}
          label="Todo's name"
        /> */}
        <TextInput
          source="todo"
          size="large"
          multiline={true}
          label="Todo's name"
        />
        
        <ReferenceInput label="Categories" source='category_id' reference='categories'>
          <SelectInput />
        </ReferenceInput>

        <ReferenceInput label="Users" source='user_id' reference='users'>
          <SelectInput />
        </ReferenceInput>

        {/* <BooleanInput label="Complete" source="complete" options={{checkedIcon: <FavoriteIcon/> }} /> */}
        <DateInput label='Create date' source='created_at'/>
        <DateInput label='Date due' source='due_date'/>
        
      </SimpleForm>
    </Create>
  )
}
