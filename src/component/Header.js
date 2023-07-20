import { useNavigate } from "react-router-dom";

export default function Header () {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex bg-white justify-between px-10 py-5 border-b border-grey-200 item-center fixed top-0 left-0 right-0">
                <div className="flex">
                    <img className="w-10 px-1" src="/images/logo.svg"/><p className="text-2xl">nivers</p>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            Home
                        </li>
                        <li>
                            <button onClick={() => navigate('/about')}>About</button>
                        </li>
                        <li>
                            <button onClick={() => navigate('/service')}>Service</button>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}