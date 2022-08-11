import fs from "fs";
import path from "path";
import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); //current working directory -> root + get the dummy data
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) return { redirect: { destination: "/no-data" } }; //if some error happens, it can be redirected to a specific error page

  if (data.products.length === 0) return { notFound: true }; //if there is no products, return to page 404

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
