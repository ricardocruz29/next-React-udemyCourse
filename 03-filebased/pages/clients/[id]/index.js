import React from "react";
import { useRouter } from "next/router";

export default function ClientsProjectPage() {
  const router = useRouter();
  const username = router.query.id;

  //function to simulate some submission
  function loadProjectHandler() {
    router.push("/clients/max/projectA"); //change the page - allows to go back
    // router.replace("/clients/max/projectA"); // change the page - doesn't allow to go back

    //can be done with the syntax used in clients/index.js
  }

  return (
    <div>
      <h1>{`Projects of user ${username}`}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
