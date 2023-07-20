import Header from "../component/Header"
import Card from "../component/Card"
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {

    const [dataProduct, setDataProduct] = useState([])
    const [search, setSearch] = useState("")

    const getData = (searchProduct) => {
        axios.get(`${process.env.REACT_APP_BASEURL}/products/search`,{
            params:{
                q: searchProduct
            }
        }).then((res) => {
            const {data} = res
            const {products} = data
            setDataProduct(products)
            // console.log(res);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        // const debounceSearch = setTimeout(() => {
        //     if(search) {
                getData(search)
        //     }
        // }, 1500)
        // return () => clearTimeout(debounceSearch)
        
    }, [search])


    return (
        <>
            <div>
                <div className="font-semibold">
                    <Header/>
                    <div className="flex justify-center mt-20">
                        <div className="flex border-2 border-grey bg-gray-50 pl-2 rounded-xl w-80">
                            <div className="flex items-center"><BsSearch className="text-2xl" /></div>
                            <input type="search" id="default-search" className=" w-full p-4 pl-10 text-sm text-gray-900 focus:border-grey focus:border-0  rounded-lg bg-gray-50 " placeholder="Search ..." value={search} onChange={onChangeSearch} />
                            </div>
                        </div>
                    </div>
                <div className="px-10 mt-5 grid grid-cols-4 gap-5">
                    {dataProduct.map((item) => (
                        <Card products={item}/>
                    ))}
                </div>
            </div>
        
        </>
    )
}