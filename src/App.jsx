import React from "react";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseClient } from "./utils/supabase";
import MyAdminPage from "./pages/MyAdminPage";

import "./App.css";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    console.log(session);
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div style={{width:"1200px", margin:"0 auto"}}>
        <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    );
  } else {
    return <MyAdminPage />;
  }
}
export default App;
