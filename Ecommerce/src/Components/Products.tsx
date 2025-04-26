import Product1 from '../assets/Images/product1.jpg';
import Product2 from '../assets/Images/product2.jpg';
import Product3 from '../assets/Images/product3.jpg';
import Product4 from '../assets/Images/product4.jpg';
import Product5 from '../assets/Images/product5.jpg';
import Product6 from '../assets/Images/product6.jpg';
import Product7 from '../assets/Images/product7.jpg';
import Product8 from '../assets/Images/product8.jpg';
import Product9 from '../assets/Images/product9.jpg';
import Product10 from '../assets/Images/product10.jpg';
import Product11 from '../assets/Images/product11.jpg';
import Product12 from '../assets/Images/product12.jpg';
import Product13 from '../assets/Images/product13.jpg';
import Product14 from '../assets/Images/product14.jpg';
import Product15 from '../assets/Images/product15.jpg';
type Props = {}

export default function Products({}: Props) {

    const Products = [
        {
            Image: Product1,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product2,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product3,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product4,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product5,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product6,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product7,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product8,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product9,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product10,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product11,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product12,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product13,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product14,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product15,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
        {
            Image: Product5,
            Name: "Product 1",
            Description: "This is product 1",
            Price: "$10.00",
        },
    ]

  return (
    <>
        <div className='grid grid-cols-4 gap-5 p-10'>
            {Products.map((product, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-10 bg-white shadow-xl">
                    <img src={product.Image} alt={product.Name} className="productimag-cover w-[350px] h-[350px] object-cover rounded-xl" />
                    <h2 className="text-lg font-bold">{product.Name}</h2>
                    <p className="text-sm font-light">{product.Description}</p>
                    <p className="text-lg font-semibold">{product.Price}</p>
                    <div>
                        <button className="bg-black text-white px-4 py-2 rounded-md mt-2 cursor-pointer">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}