/* eslint-disable @next/next/link-passhref */

import Link from "next/link";
import * as React from "react";
import {
  getSession,
  GetSessionParams,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

export default function Home() {
  const { data: session, status } = useSession();


  if (status === "authenticated") {
    return <div className="bg-black min-h-screen text-white"><p>Signed in as {session.user.ema il}</p></div> 
  }
  return (
    <div className="flex flex-col bg-black container text-white min-h-screen">
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
//Shooting Creativity Darkside HD Art Wallpapers
export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};
