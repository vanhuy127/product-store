import { Product } from "@/interface/product.interface";

interface Props {
    product: Product | null;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
    if (!product) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-600/65 flex items-center justify-center z-50 shadow-md "
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-60 w-full object-contain mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-green-600 font-semibold mb-2">${product.price}</p>
                <p className="mb-4">{product.description}</p>
                <button
                    onClick={onClose}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded"
                >
                    Đóng
                </button>
            </div>
        </div>
    );
}
