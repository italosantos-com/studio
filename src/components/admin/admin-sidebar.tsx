"use client";

import Link from "next/link";
import {
  Bell,
  Home,
  Package,
  Package2,
  MessageSquare,
  LogOut,
  Image as ImageIcon,
  Video,
  Link2,
  ThumbsUp,
  UploadCloud,
  KeyRound,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface AdminSidebarComponentProps {
  onLogout: () => void;
}

export function AdminSidebarComponent({ onLogout }: AdminSidebarComponentProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/conversations", label: "Conversas", icon: MessageSquare },
    { href: "/admin/subscribers", label: "Assinantes", icon: Users },
    { href: "/admin/products", label: "Produtos", icon: Package },
    { href: "/admin/photos", label: "Fotos", icon: ImageIcon },
    { href: "/admin/videos", label: "Vídeos", icon: Video },
    { href: "/admin/uploads", label: "Uploads", icon: UploadCloud },
    { href: "/admin/integrations", label: "Integrações", icon: Link2 },
    { href: "/admin/reviews", label: "Avaliações", icon: ThumbsUp },
    { href: "/admin/cloudflare-chat-info", label: "Chat Externo", icon: KeyRound },
    { href: "/admin/settings", label: "Configurações", icon: Settings },
  ];

  return (
    <Sidebar side="left" collapsible="offcanvas">
      <SidebarHeader className="border-b">
        <div className="flex items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-semibold">Admin Panel</span>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton asChild isActive={pathname === link.href}>
                <Link href={link.href}>
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter>
        <Button size="sm" variant="secondary" className="w-full" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
