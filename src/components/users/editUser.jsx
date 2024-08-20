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

export default function editUser() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled label="Id" source="id"/>
        <TextInput source="username" label="User name" validate={required()}/>
        <DateInput source="email" label="E-mail" />        
      </SimpleForm>
    </Edit>
  );
}







