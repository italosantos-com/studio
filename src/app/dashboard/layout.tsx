
"use client";

import { useState } from 'react';
import Header from '@/components/layout/header';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar onFetishSelect={() => {}} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
