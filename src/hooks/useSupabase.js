import { supabaseClient } from "../supabaseClient";

const fetchData = async () => {
  const { data, error } = await supabaseClient.from("posts").select();
  if (error) {
    return;
  }

  return data;
};

const insertData = async (payload) => {
  const { error } = await supabaseClient.from("posts").insert(payload);
};
export { fetchData, insertData };
