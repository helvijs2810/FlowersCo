import { NavigationMenuItem, NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Flower, Shovel, Amphora, SprayCan } from "lucide-react"

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between">
            <div>
                <Link href="/" className="flex flex-row items-center space-x-2 hover:[&>h2]:underline hover:[&>h2]:font-light">
                    <img src="https://placehold.co/80" alt="placeholder"></img>
                    <h2 className="text-2xl italic">FlowerShop Co.</h2>
                </Link>
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-48">
                                    <ListItem href="/one" title="Flowers"><Flower/></ListItem>
                                    <ListItem href="/two" title="Fertilizers and Pesticides"><SprayCan/></ListItem>
                                    <ListItem href="/three" title="Pots and Soil"><Amphora/></ListItem>
                                    <ListItem href="/four" title="Tools"><Shovel/></ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about">About</Link>    
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact</Link>    
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-row gap-1 text-sm">
            <div>
                {children}
            </div>
            <div className="leading-none font-medium">{title}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}