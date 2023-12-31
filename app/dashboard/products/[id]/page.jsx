import { UpdateProduct } from '@/app/lib/actions'
import { fetchSingleProductData } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/products/singleproductpage.module.css'
import Image from 'next/image'

async function SingleProductPage({params}) {
    const {id} = params
    const singleProduct = await fetchSingleProductData(id)

  
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={singleProduct.img || "/noavatar.png"} alt='' fill/>
            </div>
            {singleProduct.title}
        </div>
        <div className={styles.formContainer}>
            <form action={UpdateProduct} className={styles.form}>
            <input type="text" hidden value={singleProduct.id} name='id' />
            <label>Title</label>
            <input type="text" name='title' placeholder={singleProduct.title} />
            <label>Price</label>
            <input type="number" name='price' placeholder={singleProduct.price} />
            <label>Stock</label>
            <input type="number" name='stock' placeholder={singleProduct.stock} />
            <label>Color</label>
            <input type="text" name='color' placeholder={singleProduct.color} />
            <label>Size</label>
            <input name="size" placeholder={singleProduct.size} type="text"/>
            <label>Cat</label>
            <select name="cat" id="cat">
                <option value="general">Choose a Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <textarea name="desc" 
                id="desc" 
                rows="16" 
                placeholder={singleProduct.desc}>

            </textarea>
            <button type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage