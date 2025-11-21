import { useEffect, useMemo, useState } from "react";
import { Product } from "./interface/product.interface";
import { getProducts } from "./service/product.service";
import ProductModal from "./components/productModel";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        alert("Không thể tải danh sách sản phẩm")
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, sortOrder, products]);


  if (loading) return <p className="w-screen h-screen flex items-center justify-center">Đang tải...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h1>

      <div className="gap-3 mb-6 flex flex-col md:max-w-lg md:mx-auto md:flex-row">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm sản phẩm..."
          className="w-full p-3 border rounded shadow-sm"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "default" | "asc" | "desc")}
          className="p-3 border rounded shadow-sm"
        >
          <option value="default">Mặc định</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600">Không tìm thấy sản phẩm.</p>
      )}

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
        {
          filteredProducts.slice(0, 20).map((product) => (
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

              <button
                onClick={() => setModalProduct(product)}
                className="block bg-cyan-600 hover:bg-cyan-700 text-white text-center py-2 rounded"
              >
                Xem chi tiết
              </button>
            </div>
          ))
        }
      </div>

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
}

export default App
