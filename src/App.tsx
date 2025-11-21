import { useEffect, useState } from "react";
import { Product } from "./interface/product.interface";
import { getProducts } from "./service/product.service";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Không thể tải danh sách sản phẩm")
        return setLoading(false)
      });
  }, []);

  if (loading) return <p className="text-center">Đang tải...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {products.slice(0, 20).map((product) => (
          <div key={product.id} className="border p-4 rounded shadow h-full flex flex-col">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-3"
            />

            <h2 className="text-sm font-semibold line-clamp-2 mb-2">
              {product.title}
            </h2>

            <p className="mt-auto  font-bold text-lg text-green-600 mb-3">
              ${product.price}
            </p>

            <a
              href={`/product/${product.id}`}
              className="block bg-cyan-600 hover:bg-cyan-700 text-white text-center py-2 rounded"
            >
              Xem chi tiết
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
