import Image from "next/image";

type Product = {
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { name: "Men's Watch", price: 300, image: "/images/w1.png" },
  { name: "Men's Watch", price: 300, image: "/images/w2.png" },
  { name: "Men's Watch", price: 300, image: "/images/w3.png" },
  { name: "Men's Watch", price: 300, image: "/images/w4.png" },
  { name: "Men's Watch", price: 300, image: "/images/w5.png" },
  { name: "Men's Watch", price: 300, image: "/images/w6.png" },
  { name: "Men's Watch", price: 300, image: "/images/w7.png" },
  { name: "Men's Watch", price: 300, image: "/images/w8.png" },
  { name: "Men's Watch", price: 300, image: "/images/w9.png" },
];

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Sale Watches
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h6 className="text-lg font-medium">{product.name}</h6>
                <h5 className="text-lg font-semibold">${product.price}</h5>
              </div>
              <div className="flex items-center mb-4">
                <p className="text-sm text-gray-600 mr-2">Like</p>
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
