import Image from "next/image"
import "../styles/reviewsec.css"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export default function Reviewsec(){
    return(
        <main className="Main-box1">
            <div className="gridbox2">
                <div className="top-sec">
                <h1>OUR HAPPPY CUSTOMERS</h1>
                <div className="arrow">
                <FaArrowRight className="mr-5 hidden md-[600px]:block transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"/>
                <FaArrowLeft className="hidden md-[600px]:block transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"/>
                </div>
                </div>
                <div className="gridsec">
                <div className="boxs1">
                <Image src="/reviewpicture.png" height={22.58} width={138.84} alt="review"/>
                <h1>Sarah M. <span><RiVerifiedBadgeFill/></span> </h1>
                <p>Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
                </div>
                <div className="boxs2">
                <Image src="/reviewpicture.png" height={22.58} width={138.84} alt="review"/>
                <h1>Alex K. <RiVerifiedBadgeFill/> </h1>
                <p>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className="boxs3">
                    <Image src="/reviewpicture.png" height={22.58} width={138.84} alt="review"/>
                <h1>James L. <RiVerifiedBadgeFill/> </h1>
                <p>As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
                    </div>
                    </div>
            </div>
        </main>
    )
}