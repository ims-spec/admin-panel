import React from 'react'
import { List, Datagrid, TextField, DateField } from 'react-admin'
export default function usersList() {
  return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
  )
}
