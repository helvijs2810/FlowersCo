import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page(){
    return (
        <div className="space-y-10">
            <div>
                <h3 className="text-3xl text-green-600">Welkomen!</h3>
                <p>Welcome to FlowerShop Co., spearheding industry defining sales in gardening products and equipment.</p>
            </div>
            <div>
                <h3 className="text-3xl text-green-600">About us!</h3>
                <p>FlowerShop Co. was established in 1986 by one man and his undying passion for gardening.</p>
                <p>Just as his flowers, company bloomed to unprecidented heights with now running many stores across the nation.</p>
                <p>If you would like to read more about our story, click button below:</p>
                <Button asChild variant="outline">
                    <Link href="/about">Our Story!</Link>
                </Button>
            </div>
            <div>
                <h3 className="text-3xl text-green-600">Contact us!</h3>
                <p>Do you have any questions regarding our product offering or in need to assistance?</p>
                <p>Contact us by calling us, sending us email, or using a contact form which can be reached with contact button below:</p>
                <Button asChild variant="outline">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    )
}