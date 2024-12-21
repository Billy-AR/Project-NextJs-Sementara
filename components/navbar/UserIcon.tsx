import { LuUser } from "react-icons/lu";
// import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  //   const { userId } = await auth();

  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />;
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
