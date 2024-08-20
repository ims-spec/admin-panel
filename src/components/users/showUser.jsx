import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField, ReferenceField } from 'react-admin';

const showUser = () => (
  <Show>
      <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="username" />
          <TextField source="email" />
          <DateField source="created_at" />
          {/* <ReferenceField source="category_id" reference="categories" label="Category" /> */}
      </SimpleShowLayout>
  </Show>
);

export default showUser
