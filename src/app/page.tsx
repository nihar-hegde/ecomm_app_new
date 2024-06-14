import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-9xl font-extrabold">Welcome</p>
        <p className="text-lg font-semibold">
          To the best ecom store in the world buy anything you want here.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p>Temporoary buttons for admin</p>
        <Link href="/admin/user/dashboard" className={buttonVariants()}>
          GO to Dashboard
        </Link>
      </div>
    </main>
  );
}
