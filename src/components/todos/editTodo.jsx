import React from "react";
import { 
    Edit, 
    SimpleForm, 
    TextInput, 
    DateInput, 
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    required
} from "react-admin";

export default function editTodo() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label="Id" source="id"/>
        <TextInput source="todo" label="Category name" validate={required()}/>
        <DateInput source="created_at" label="Created date" />
        <ReferenceManyField label="Todos" reference="todos" target="category_id">
            <Datagrid>
                <TextField source="category_name"/>
                <DateField source="created_at"/>
            </Datagrid>
        </ReferenceManyField>
      </SimpleForm>
    </Edit>
  );
}







