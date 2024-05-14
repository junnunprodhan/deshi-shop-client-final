import { UserRole } from "@/Types/Global";
import { USER_ROLE } from "@/constanc/constant";
import { MdLibraryAdd, MdOutlineShoppingCart } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const SideBarItem = (role: UserRole) => {
  const roleMenu = [];
  switch (role) {
    case USER_ROLE.admin:
      roleMenu.push(
        {
          title: "Dashboard",
          path: `/${role}`,
          icon: RxDashboard,
        },
        {
          title: "Add-Products",
          path: `${role}/products/add-product`,
          icon: MdLibraryAdd,
        },
        {
          title: "Products",
          path: `${role}/products`,
          icon: MdOutlineShoppingCart,
        },
        {
          title: "Orders",
          path: `${role}/orders`,
          icon: MdOutlineShoppingCart,
        }
      );

      break;

    case USER_ROLE.user:
      roleMenu.push({
        title: "My-Orders",
        path: `${role}/my-orders`,
        icon: MdOutlineShoppingCart,
      });

    default:
      break;
  }
  return [...roleMenu];
};
