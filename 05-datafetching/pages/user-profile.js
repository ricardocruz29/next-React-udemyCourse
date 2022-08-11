function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context; //we could extract headers, cookies, etc -> Default node objects

  return {
    props: {
      username: "Max",
    },
  };
}

export default UserProfilePage;
