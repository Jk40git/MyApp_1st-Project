import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_APP_SUPABASE_PROJECT_URL!;
const key = import.meta.env.VITE_APP_SUPABASE_API_KEY!;

export const supabase=createClient(url, key)



function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    if(data){
    setUsers(data);
    }
  }

  

  return (
    <>
    <ul>
      {users.map((user) => (
        <li key={user.full_name}>{user.full_name}</li>
      ))}
    </ul>
  <div>

  </div>

  </>
  );
}


export default App;


