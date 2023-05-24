import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  
  return (
    <main>
      <div className="flex min-w-full justify-end bg-slate-900 p-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
