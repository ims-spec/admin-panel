// import { SupabaseClient } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { Create, SimpleForm, TextInput, DateInput, SelectInput, BooleanInput, ReferenceInput } from 'react-admin'
import { supabaseClient } from '../../utils/supabase'






export default function createTodo() {

  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput
          source="todo"
          multiline={true}
          label="Todo's name"
        />
        
        <ReferenceInput label="Categories" source='category_id' reference='categories'>
          <SelectInput />
        </ReferenceInput>

        <ReferenceInput label="Users" source='user_id' reference='users'>
          <SelectInput />
        </ReferenceInput>

        {/* <BooleanInput label="Complete" source="complete" /> */}
        <DateInput label='Create date' source='created_at'/>
        <DateInput label='Date due' source='due_date'/>
        
      </SimpleForm>
    </Create>
  )
}
