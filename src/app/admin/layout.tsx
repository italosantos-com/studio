
"use client";

import { useState, useEffect, useCallback } from 'react';
import AdminHeader from '@/components/admin/header';
import { AdminSidebarComponent } from '@/components/admin/admin-sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AdminLoginPage from './login/page';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  useEffect(() => {
    if (isAuthenticated === false && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [isAuthenticated, pathname, router]);

  const handleAuthSuccess = useCallback(() => {
    setIsAuthenticated(true);
    router.replace('/admin');
  }, [router]);
  
  const handleLogout = useCallback(() => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    router.replace("/admin/login");
  }, [router]);
  
  if (isAuthenticated === null) {
    return (
       <div className="flex h-screen w-full items-center justify-center bg-background">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <AdminLoginPage onAuthSuccess={handleAuthSuccess} />;
  }

  if (!isAuthenticated) {
    // This case should be handled by the useEffect redirect,
    // but it's a good fallback.
    return (
       <div className="flex h-screen w-full items-center justify-center bg-background">
        <p className="text-muted-foreground">Verificando autorização...</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebarComponent onLogout={handleLogout} />
        <SidebarInset>
          <AdminHeader />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
