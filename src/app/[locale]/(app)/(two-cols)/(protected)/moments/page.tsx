"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const MomentsPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/moments");
    },
  });
  return (
    <div>
      <p>
        Im assuming that this page is protected & its client component to know
        if user is auth or not at client component with next auth we must wrap
        our app with context to make session available to all client components
        but with server side component we dont need to use context next auth
        does that without any thing we can use the session where we need we can
        also protect any route by entering route name at middleware file at
        (config constant)
      </p>
    </div>
  );
};

export default MomentsPage;
