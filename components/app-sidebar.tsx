import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Avatar } from "@/public";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Image from "next/image";
import Icon, { IconName } from "./ui/Icon";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-5 border-b-2">
        <div className="center">
          <div className="stack-h mb-5">
            <Icon name="Logo" size={30} />
            <h4 className='font-semibold ml-3'>AdvoScholar</h4>
          </div>
          <Image
            src={Avatar}
            alt="school-img"
            width={150}
            height={100}
            priority
            className="rounded-full max-h-[150px] max-w-[150px]"
          />
          <h1 className="text-center text-2xl font-bold mt-5 line-clamp-1 overflow-x-hidden text-ellipsis">
            School Name
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {menu.map((item) => (
              <SidebarMenu key={item.id}>
                <Collapsible
                  defaultOpen={item.hasSubmenu}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item.icon && (
                          <Icon
                            name={item.icon as IconName}
                            size={25}
                            className="mr-3"
                          />
                        )}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.hasSubmenu && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenuItems.map((subItem) => (
                            <SidebarMenuButton key={subItem}>
                              {subItem}
                            </SidebarMenuButton>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const menu = [
  {
    id: "employee",
    title: "Employee",
    icon: "Employer",
    hasSubmenu: true,
    submenuItems: ["Admin", "Academic", "Non Academic"],
  },
  {
    id: "classes",
    title: "Classes",
    icon: "Class",
    hasSubmenu: true,
    submenuItems: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: "Inventory",
    hasSubmenu: false,
    submenuItems: [],
  },
  {
    id: "fee",
    title: "Fee",
    icon: "fees",
    hasSubmenu: true,
    submenuItems: ["Analytics"],
  },
  {
    id: "settings",
    title: "Settings",
    icon: "settings",
    hasSubmenu: true,
    submenuItems: ["Profile Settings"],
  },
];
