import Link from 'next/link';

import Image from "next/legacy/image";

const productData = [
  {
    id: 1,
    productImage: '/shirt.png',
    brand: '21WN ',
    productName: 'Angle shirt',
    amount: 120,
  },
  {
    id: 2,
    productImage: '/shirt.png',
    brand: '21WN ',
    productName: 'Angle shirt',
    amount: 120,
  },
  {
    id: 3,
    productImage: '/longsleeve.png',
    brand: '21WN ',
    productName: '2024 convertible shirt',
    amount: 120,
  },
  {
    id: 4,
    productImage: '/turtleneck.png',
    brand: 'lame',
    productName: 'reversible angora cardigan',
    amount: 120, 
  },
  {
    id: 5,
    productImage: '/sweater.png',
    brand: '21WN ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 6,
    productImage: '/shirt.png',
    brand: 'lame ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 7,
    productImage: '/checkshirt.png',
    brand: '21WN ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 8,
    productImage: '/turtleneck.png',
    brand: 'lame',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 9,
    productImage: '/sweater.png',
    brand: '21WN ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 10,
    productImage: '/jacket.png',
    brand: 'lamerei ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 11,
    productImage: '/jacket.png',
    brand: 'lamerei ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
  {
    id: 12,
    productImage: '/jacket.png',
    brand: 'lamerei ',
    productName: 'reversible angora cardigan',
    amount: 120,
  },
];



const Data = () => {
return (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {productData.map(product => (
      <div className="space-y-3" >
        <Link href={`./Product`}>
         
            <Image src={product.productImage} alt={product.productName} width={200} height={200} />
         
        </Link>
        <h2 className="font-normal text-xs">{product.brand}</h2>
        <p className="font-normal text-xs">{product.productName}</p>
        <p className="font-normal text-xs text-[#FF5E00]">${product.amount}</p>
      </div>
    ))}
  </div>
);
};

export default Data

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get('id');
// //Using Array Map method
// const selectedImage = productData.find(product => product.id == id);
// if (selectedImage) {
//     const detailsHTML = `<div><Image src={product.productImage} alt={product.productName} width={200} height={200} /></div>`
//          const detailsContainer = document.getElementById('detailsContainer');
//          detailsContainer.innerHTML = detailsHTML;
//      } else {
//          const errorMessage = '<p>Product  not found.</p>';
//          const detailsContainer = document.getElementById('detailsContainer');
//          detailsContainer.innerHTML = errorMessage;
//      }










 