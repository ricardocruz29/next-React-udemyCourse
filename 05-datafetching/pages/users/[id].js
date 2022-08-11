function UserIdPage({id}) {
  return <h1>{id}</h1>
}

export async function getServerSideProps(context) {
  const { params } = context;

  const uid = params.id;

  return {
    props: {
      id: `user with id ${uid}`,
    },
  };
}

export default UserIdPage;
