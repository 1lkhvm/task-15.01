import React, { useEffect, useState } from 'react'
import './Main.scss'

function Main() {

    const [mydata, setmydata] = useState([])
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((response) => response.json())
            .then((data) => setmydata(data))
    }, [])


    return (
        <>
            <div>
                
                
                <button onClick={()=>{setmydata([...mydata].sort((a,b) => (a.unitPrice > b.unitPrice) ? 1 : ((b.unitPrice > a.unitPrice)) ? -1 : 0 ))}}>Qiymet Azdan oxa</button>
                <button onClick={()=>{setmydata([...mydata].sort((a,b) => (a.unitPrice < b.unitPrice) ? 1 : ((b.unitPrice < a.unitPrice)) ? -1 : 0 ))}}>Qiymet Çoxdan aza</button>

            </div>


            {mydata.map((element) => {

                return (


                    <body>

                        <main>
                            <div class="card">
                                <div class="card__title">
                                    <div class="icon">
                                        <a href="#"><i class="fa fa-arrow-left"></i></a>
                                    </div>
                                    <h3>New Job</h3>
                                </div>
                                <div class="card__body">
                                    <div class="half">
                                        <div class="featured_text">
                                            <h1 >{element.name}</h1>
                                            <p class="sub"></p>
                                            <p class="price">{element.unitPrice}$</p>
                                        </div>

                                    </div>
                                    <div class="half">
                                        <div class="description">
                                            <p>{element?.category?.description}</p>
                                        </div>
                                        <span class="stock"><i class="fa fa-pen"></i> In stock ({element.unitsInStock})</span>
                                        <div class="reviews">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <span>(64 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="recommend">
                                        <p>Recommended by</p>
                                        <h3>1lkhvm</h3>
                                    </div>
                                    <div class="action">
                                        <button type="button">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </body>
                )
            })}



        </>
    )
}

export default Main