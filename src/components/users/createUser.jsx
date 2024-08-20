import React from 'react'
import { Create, TextInput, SimpleForm, DateInput } from 'react-admin'

export default function createUser() {
  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput
          source="username"
          multiline={true}
          label="User's name"
        />
        <TextInput 
            source='email'
            label='E-mail'
        />
        <DateInput
          label="Create date"
          source="created_at"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  )
}
