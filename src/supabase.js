import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfikqflsgnvtferrsgmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmaWtxZmxzZ252dGZlcnJzZ216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5MDMyNjAsImV4cCI6MTk3ODQ3OTI2MH0.k56IL6MehiZFve90yfsgq5uRbGs3klqTiNDzK7zOPZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export let dbLoadVendor = async (vendor) => {
  let res = await supabase
    .from("icons")
    .select("icon,tags,vendor")
    .eq("vendor", vendor);
  return res.data;
};
