import DropdownNavItem from "./DropdownNavItem ";
import NavItem from "./NavItem";

const navbarLinks = [
    {
        type: "dropdown",
        label: "Shop",
        items: [
            { to: "/kategori/pakaian", label: "Pakaian" },
            { to: "/kategori/elektronik", label: "Elektronik" },
        ],
    },
    { type: "link", to: "/", label: "On Sale" },
    { type: "link", to: "/produk", label: "New Arrivals" },
    { type: "link", to: "/promo", label: "Brands" },
];

const NavbarLinks = () => {
    return (
        <nav className="flex items-center gap-6">
            {navbarLinks.map((item) => {
                if (item.type === "link") {
                    return <NavItem key={item.to} to={item.to} label={item.label} />
                }

                if (item.type === "dropdown") {
                    return (
                        <DropdownNavItem
                            key={item.label}
                            label={item.label}
                            items={item.items}
                        />
                    );
                }

                return null
            })}
        </nav>
    )
}

export default NavbarLinks