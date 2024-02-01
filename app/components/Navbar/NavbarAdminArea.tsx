"use client";
import { signOut } from "next-auth/react";
import { HiPower } from "react-icons/hi2";

export default function NavbarAdminArea() {
  const UserSignOut = async () => {
    await signOut();
  };
  return (
    <button className="btn btn-ghost btn-circle" onClick={() => UserSignOut()}>
      <div className="indicator">
        <HiPower className="text-xl" />
      </div>
    </button>
  );
}
