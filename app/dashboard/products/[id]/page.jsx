import styles from '@/app/ui/dashboard/products/singleproductpage.module.css'
import Image from 'next/image'

function SingleProductPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill/>
            </div>
            Iphone
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <label>Title</label>
            <input type="text" name='title' placeholder='Iphone' />
            <label>Price</label>
            <input type="number" name='price' placeholder='$999' />
            <label>Stock</label>
            <input type="number" name='stock' placeholder='23' />
            <label>Color</label>
            <input type="text" name='color' placeholder='silver' />
            <label>Size</label>
            <input name="size" placeholder='large' type="text"/>
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
                placeholder='Desciption'>

            </textarea>
            <button type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage