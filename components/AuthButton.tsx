// "use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { signOut } from "@/utils/supabase/serversignout";

export default async function AuthButton() {
  // 由于我们移除了登录功能，以下认证相关的代码将不再需要
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // 登出功能也将被移除
  // const signOut = async () => {
  //   "use server";

  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);
  //   await supabase.auth.signOut();

  //   return redirect("/login");
  // };

  // 由于不再需要检查用户是否登录，我们可以简化返回的JSX结构
  return (
    // 移除了所有登录和登出的UI元素，此处可以放置非认证相关的内容或完全留空
    <div>
      {/* 在这里添加不需要用户登录的内容 */}
    </div>
  );
}
