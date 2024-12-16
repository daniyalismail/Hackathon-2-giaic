import "../styles/grid1.css";
import Image from "next/image";
export default function Grid1(){
    return(
        <main className="main-box">
        <div className="heading-1">
            <h1>NEW ARRIVALS</h1>
        </div>
        <div className="grid-box">
            <div className="box1">
                <Image src="/grid-pic-1.png" height={298} width={295} alt="Shirt1"/>
                <h1>T-shirt With Tape Details</h1>
                <Image src="/review.png" height={19} width={150} alt="review1"/>
                <p>$120</p>
            </div>
            <div className="box1">
            <Image src="/grid-pic-2.png" height={298} width={295} alt="Shirt2" />
                <h1>Skinny Fit Jeans</h1>
                <Image src="/review2.png" height={19} width={126.20} alt="review2"/>
                <div className="price-box">
                <p>$240<del>$260</del></p>
                <div className="sale-box">
                    <p>-20%</p>
                </div>
                </div>
            </div>
            <div className="box1">
            <Image src="/grid-pic-3.png" height={298} width={295} alt="Shirt3"/>
                <h1>Checkered Shirt</h1>
                <Image src="/review.png" height={19} width={150} alt="review3"/>
                <p>$180</p>
            </div>
            <div className="box1">
            <Image src="/grid-pic-4.png" height={298} width={295} alt="Shirt4"/>
            <h1>Sleeve Striped T-shirt</h1>
            <Image src="/review.png" height={19} width={150} alt="review4"/>
            <div className="price-box">
                <p>$130<del>$160</del></p>
                <div className="sale-box">
                    <p>-30%</p>
                </div>
                </div>
            </div>
        </div>
        <div className="view-all-bt">
                <button>
                    View All
                </button>
            </div>
            <hr  className="horizontal-line"/>
        </main>
    )
}