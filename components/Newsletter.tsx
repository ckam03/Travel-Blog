const Newsletter = () => {
    return (
        <div className="flex items-center justify-around border rounded bg-emerald-800 max-w-6xl m-auto h-56">
            <div className="">
            <h1 className="text-3xl text-emerald-50">Want regular updates?</h1>
            <p className="text-xl text-emerald-100">Follow us to stay up to date with the best travel tips and content</p>

            </div>
            <div className="flex">

            <input type="text" className="h-12 rounded" placeholder="Enter your email"/>
            <button className="bg-emerald-500 text-emerald-100 p-2 rounded-md ml-4">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter