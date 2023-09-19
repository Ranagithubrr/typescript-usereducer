const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">useReducer & ts project</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/products" className="hover:text-gray-400">Products</a></li>
                    <li><a href="/cart" className="hover:text-gray-400">Cart</a></li>
                    <li><a href="/account" className="hover:text-gray-400">Account</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
