import logo from "../Assets/logo.svg";
const navbar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7x1 mx-auto">
                <div className="flex justify-between items-center py-3">
                    <div className="flex flex-1 justify-start">
                    <img src={logo} alt="coinbase logo"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default navbar;