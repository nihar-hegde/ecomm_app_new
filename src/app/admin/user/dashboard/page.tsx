import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-24">
      <div>
        <p className="text-xl font-bold">This is the admin dashboard</p>
      </div>
      <div>
        <Link href={"/"} className={buttonVariants()}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
