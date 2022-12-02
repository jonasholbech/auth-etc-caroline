import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { fetchData, insertData } from "./hooks/useSupabase";
import { supabaseClient } from "./supabaseClient";
function App() {
  const { auth, login } = useAuth();
  const [posts, setPosts] = useState([]);
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setPosts(data);
    }
    getData();
  }, [trigger]);

  const submit = async (e) => {
    e.preventDefault();
    e.target.elements.submit.disabled = true;
    await insertData({
      title: e.target.elements.title.value,
      body: e.target.elements.body.value,
    });
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
    e.target.elements.submit.disabled = false;
    setTrigger(Date.now());
  };
  return (
    <div className="App">
      {!auth ? (
        <button onClick={login}>Sign in with GitHub</button>
      ) : (
        <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      )}
      <form action="#" onSubmit={submit}>
        <input type="text" name="title" />
        <textarea name="body" disabled={!auth}></textarea>
        <button type="submit" disabled={!auth} name="submit">
          Submit
        </button>
      </form>
      {posts.map((post) => (
        <section key={post.id}>{post.title}</section>
      ))}
    </div>
  );
}

export default App;
