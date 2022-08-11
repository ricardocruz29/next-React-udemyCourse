import fs from "fs";
import path from "path";

function ProductDetailPage({ loadedProduct }) {
  //since fallback is true, we are not guaranteed to have a loadedProduct at start. It can be post fetched.
  if (!loadedProduct) return <h1>...Loading</h1>;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); //current working directory -> root + get the dummy data
  const jsonData = await fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const productId = context.params.id;

  const data = await getData();

  if (!data) return { redirect: { destination: "/no-data" } }; //if some error happens, it can be redirected to a specific error page

  const product = data.products.find((p) => p.id === productId);

  if (!product) return { notFound: true }; //if there is no products, return to page 404

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { id } })); //Creates an array with objects of type {params: {id: 'p1'}}

  return {
    paths: pathsWithParams,
    fallback: "blocking",
    /* fallback possible values are:
     false -> Error if there is not that product -> Good where there is not a lot of data to be pre-generated
     true -> Client fetches the product. Needs to be validated in client code if there is a loadedProduct -> Good where there is million of data and we want to pre-render only the important one
     'blocking' -> Longer wait, but is fetched by Next server. The page is only presented when it finishes fetching -> Good for the same case, but in this case, it is not presented an incomplete page that is not pre-rendered
    */
  };
}

export default ProductDetailPage;
