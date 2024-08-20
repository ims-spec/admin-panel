import React from 'react'
import { List, Datagrid, TextField, DateField } from 'react-admin'
export default function CategoriesList() {
  return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="category_name" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
  )
}
