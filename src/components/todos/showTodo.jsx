import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, ReferenceField } from 'react-admin';

const showTodo = () => (
  <Show>
      <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="todo" />
          <DateField source="created_at" />
          <DateField source="due_date" />
          <ReferenceField source="category_id" reference="categories" label="Category" />
          <ReferenceField source="user_id" reference="users" label="User" />
      </SimpleShowLayout>
  </Show>
);

export default showTodo
