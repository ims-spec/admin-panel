import React from "react";
import { Admin, ListGuesser, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "../utils/dataProvider";
import { MyLayout } from "../MyLayout";
import { authProvider } from "../utils/authProvider";


//dashboard
import dashboard from "../components/dashboard/dashboard";


// categories
import createCategory from "../components/categories/createCategory";
import editCategory from "../components/categories/editCategory";

//todos
import editTodo from "../components/todos/editTodo";
import createTodo from "../components/todos/createTodo";
import showTodo from "../components/todos/showTodo";
import todosList from "../components/todos/todosList";

//users
import createUser from "../components/users/createUser";
import editUser from "../components/users/editUser";
import usersList from "../components/users/usersList";
import showUser from "../components/users/showUser"

// import { Auth } from "@supabase/auth-ui-react";



export default function MyAdminPage() {
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={dashboard}
      layout={MyLayout}
      authProvider={authProvider}
    >
      <Resource
        name="categories"
        list={ListGuesser}
        create={createCategory}
        edit={editCategory}
        show={ShowGuesser}
        recordRepresentation={(record)=>`${record.category_name}`}            
      />

      <Resource
        name="todos"
        list={todosList}
        // list={ListGuesser}
        create={createTodo}
        edit={editTodo}
        show={showTodo}

      />

      <Resource 
        name="users"
        list={ListGuesser}
        create={createUser}
        edit={editUser}
        show={showUser}
        recordRepresentation={(record)=>`${record.username}`}
      />
    </Admin>
  );
}
