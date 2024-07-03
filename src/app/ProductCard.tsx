import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import catImage from '../../public/images/cat.webp';
import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
type Props = {
    productId:number,
};

const ProductCard = ({ productId }:Props) => {
    return (
        <Link href={`/product-details/${productId}`}>
            <div className="w-[282px] h-[401px]">
                <Card>
                    <CardHeader>
                        <Image
                            src={catImage}
                            alt="Picture of the product"
                            width={500}
                            height={500}
                            blurDataURL="/"
                        // placeholder="blur" // Optional blur-up while loading
                        />

                        {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                        <p>Black Relax Fit Bottoms with Self Piping on Front</p>
                        <div className="flex justify-start gap-4 items-center">
                            <span className="text-[#1C1D1D] text-sm line-through">Rs. 4000</span>
                            <span className="text-[#1C1D1D] text-sm">Rs. 3500</span>
                            <span className="text-[#D70101] text-sm">Save Rs.500</span>
                        </div>
                        <div className="flex justify-start gap-4 items-center my-2">
                            <span className="w-6 h-6 bg-[#F3F3F3] flex justify-center items-center">
                                S
                            </span>
                            <span className="w-6 h-6 bg-[#F3F3F3] flex justify-center items-center">
                                M
                            </span>
                            <span className="w-6 h-6 bg-[#F3F3F3] flex justify-center items-center">
                                L
                            </span>
                            <span className="w-6 h-6 bg-[#F3F3F3] flex justify-center items-center">
                                XL
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Link>
    )
}



export default ProductCard