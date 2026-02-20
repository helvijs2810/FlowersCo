import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Page(){
    return (
        <div className="grid grid-cols-1 grid-rows-3 h-fit w-6xl">
            <div className="flex flex-row justify-between">
                <div className="relative w-100">
                    <div className="relative inline-block w-120 h-100">
                        <div className="absolute w-full flex">
                            <img src="/img/flower_1.JPG" className="w-110"></img>
                        </div>
                        <div className="absolute w-full flex h-full justify-center items-center">
                            <img src="/img/flower_2.jpg" className="w-110"></img>
                        </div>
                        <div className="absolute w-full flex h-full justify-end items-end">
                            <img src="/img/flower_3.jpg" className="w-110"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-xl">
                    <h3 className="text-3xl text-russian-green">Welkomen!</h3>
                    <p>Welcome to FlowerShop Co., spearheding industry defining sales in gardening products and equipment.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-3xl text-russian-green">About us!</h3>
                <p>FlowerShop Co. was established in 1986 by one man and his undying passion for gardening.</p>
                <p>Just as his flowers, company bloomed to unprecidented heights with now running many stores across the nation.</p>
                <p>If you would like to read more about our story, click button below:</p>
                <Button asChild variant="outline" className="w-fit">
                    <Link href="/about">Our Story!</Link>
                </Button>
            </div>
            <div className="flex flex-col">
                <h3 className="text-3xl text-russian-green">Contact us!</h3>
                <p>Do you have any questions regarding our product offering or in need to assistance?</p>
                <p>Contact us by calling us, sending us email, or using a contact form which can be reached with contact button below:</p>
                <Button asChild variant="outline" className="w-fit">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    )
}