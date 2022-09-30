import Image from "next/image"
import gc from "../images/grand-canyon.jpg"

const Post = () => {
    return (
        <div>
            <Image src={gc} height={250} width={350} />
            <h1 className="text-center">Grand Canyon</h1>
        </div>

    )
}
export default Post