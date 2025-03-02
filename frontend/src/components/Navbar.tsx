import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link to="/"> Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Home / Classify Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link to="/classify"> Classify</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Comments Page Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link to="/comments"> Comments</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* About Section - since it's on the same page, you could use an anchor link */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link to="/about"> About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
