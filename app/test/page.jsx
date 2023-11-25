

const page = ()=>{

        const handleForm = async (fromData)=>{
            'use server'
            const username = fromData.get("username")
            console.log(username)
        }

    return(
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default page