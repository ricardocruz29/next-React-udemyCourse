import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales); //first state comes from getStatic
  // const [loading, setLoading] = useState(false)

  const { data, error } = useSWR(
    "https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (!data) return;

    const transformedSales = [];
    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(transformedSales);
  }, [data]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //firebase returns in a form of object. Transform to array
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setLoading(false);
  //     });
  // }, []);

  if (error) return <p>Error</p>;
  if (!data && !sales) return <p>Loading ....</p>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <p>
            {sale.username} - ${sale.volume}
          </p>
        </li>
      ))}
    </ul>
  );
}

//combinining getStatic with client side fetching
export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-f25e2-default-rtdb.firebaseio.com/sales.json"
  );
  const data = response.json();

  //firebase returns in a form of object. Transform to array
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}

export default LastSalesPage;
