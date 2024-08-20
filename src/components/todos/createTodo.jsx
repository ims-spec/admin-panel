import { Create, SimpleForm, TextInput, DateInput, SelectInput, BooleanInput, ReferenceInput } from 'react-admin'
// import FavoriteIcon from '@mui/icons-material/Favorite';





export default function createTodo() {

  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput
          source="todo"
          multiline={true}
          label="Todo's name"
        />
        
        <ReferenceInput label="Categories" source='category_name' reference='categories'>
          <SelectInput />
        </ReferenceInput>

        <ReferenceInput label="Users" source='username' reference='users'>
          <SelectInput />
        </ReferenceInput>

        {/* <BooleanInput label="Complete" source="complete" options={{checkedIcon: <FavoriteIcon/> }} /> */}
        <DateInput label='Create date' source='created_at'/>
        <DateInput label='Date due' source='due_date'/>
        
      </SimpleForm>
    </Create>
  )
}
