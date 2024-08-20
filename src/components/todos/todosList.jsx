import React from 'react'
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin'



export default function todosList() {
  return (
    <List resource='todos'>
        <Datagrid>
            <TextField source="id" />
            <TextField source="todo" />
            <TextField source="category_id" />
            <TextField source="user_id" />
            <TextField source="complete" />
            <DateField source="due_date" />
            <DateField source="created_at" />
        </Datagrid>

    </List>
  )
}
