import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About'
};

export default function Page(){
    return (
        <div>
            <p className="text-3xl text-amber-600">Hello World!</p>
        </div>
    )
}