import Link from 'next/link'
import styles from '../../ui/dashboard/products/products.module.css'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import { fetchProductData } from '@/app/lib/data'

async function Products({searchParams}) {

    const q =  searchParams?.q || "" ;
    const page =  searchParams?.page || 1 ;
    const {count,products} = await fetchProductData(q,page)
    console.log(products)

  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder={"product"}/>
      <Link href="/dashboard/products/addProduct">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>color</td>
          <td>size</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product=>(
        <tr key={product.id}>
          <td><div className={styles.product}>
            <Image src={product.img || "/noproduct.jpg"} alt='' width={40} height={40}
            className={styles.productImage}
            />
            {product.title}
            </div>
          </td>
          <td>{product.desc}</td>
          <td>${product.price}</td>
          <td>{product.createdAt.toString().slice(4,16)}</td>
          <td>{product.stock}</td>
          <td>{product.color}</td>
          <td>{product.size}</td>
          <td>
            <div className={styles.buttons}>
            <Link href={`/dashboard/products/${product.id}`}>
              <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
          </td>
        </tr>
          ))
        }
      </tbody>
    </table>
    <Pagination count={count}/>
</div>
  )
}

export default Products