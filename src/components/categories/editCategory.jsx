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

export default function editCategory() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label="Id" source="id"/>
        <TextInput source="category_name" label="Category name" validate={required()}/>
        <DateInput source="created_at" label="Created date" />        
      </SimpleForm>
    </Edit>
  );
}
