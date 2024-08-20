import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export default function createCategory() {
  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput
          source="category_name"
          multiline={true}
          label="Category name"
        />
        <DateInput
          label="Create date"
          source="created_at"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
}
