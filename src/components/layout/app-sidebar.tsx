"use client";

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Video, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetishCategories, Fetish } from '@/lib/fetish-data';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  onFetishSelect: (fetish: Fetish) => void;
}

export function AppSidebar({ onFetishSelect }: AppSidebarProps) {
  const router = useRouter();
  
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleFetishClick = (item: Fetish) => {
    onFetishSelect(item);
  };
  
  return (
    <Sidebar side="left" collapsible="offcanvas">
      <SidebarHeader>
        <h2 className="text-xl font-bold text-shadow-neon-red-light px-2">Menu</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button 
              variant="destructive" 
              className="w-full justify-start text-base py-6 bg-primary/90 hover:bg-primary text-primary-foreground shadow-neon-red-light hover:shadow-neon-red-strong transition-all duration-300" 
              onClick={() => handleNavigate('/admin')}
            >
              +18 ADULT WORK
            </Button>
          </SidebarMenuItem>
          
          <Accordion type="single" collapsible className="w-full px-2">
            <AccordionItem value="fetish-bdsm" className="border-none">
              <AccordionTrigger className="p-3 hover:no-underline hover:bg-muted rounded-md text-base">
                FETISH &amp; BDSM
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <Accordion type="multiple" className="w-full">
                  {Object.entries(fetishCategories).map(([category, items]) => (
                    <AccordionItem key={category} value={category} className="border-none">
                      <AccordionTrigger className="py-2 px-2 text-sm hover:no-underline hover:bg-muted/50 rounded-md">
                        {category}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <ul className="space-y-1 pt-1">
                          {items.map((item) => (
                            <li key={item.id}>
                              <button 
                                onClick={() => handleFetishClick(item)} 
                                className="block w-full text-left p-2 text-xs rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              >
                                {item.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            <SidebarMenuItem className="list-none">
              <Link href="/fotos" className="block p-3 rounded-md hover:bg-muted">
                FOTOS
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem className="list-none">
              <Link href="/videos/venda-avulsa" className="block p-3 rounded-md hover:bg-muted">
                VÍDEOS
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem className="list-none">
              <Link href="/videos/assinatura" className="block p-3 rounded-md hover:bg-muted">
                ASSINATURA
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem className="list-none">
              <Link href="/loja" className="block p-3 rounded-md hover:bg-muted">
                LOJA ON-LINE
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem className="list-none">
              <Link href="/aluga-se" className="block p-3 rounded-md hover:bg-muted">
                ALUGA-SE
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem className="list-none">
              <Link href="/canais" className="block p-3 rounded-md hover:bg-muted">
                CANAIS
              </Link>
            </SidebarMenuItem>
            
            <AccordionItem value="about" className="border-none">
              <AccordionTrigger className="p-3 hover:no-underline hover:bg-muted rounded-md text-base">
                SOBRE
              </AccordionTrigger>
              <AccordionContent className="pl-4 pt-2 text-muted-foreground text-sm space-y-4">
                <div className="text-sm text-muted-foreground space-y-4">
                  <h3 className="font-semibold text-primary/90">Características Físicas</h3>
                  <p>1,69m de altura e 70kg com cabelo castanho claro corpo atlético magro definido um dote de 20cm.</p>
                  <p>Fetichista elite. Costumo dizer isso pois para meus servos o cachê que pagam indiferente em suas vidas.</p>
                  <p>Independentemente do status social trato todos igualmente mesmo aqueles que só possam ter o prazer de desfrutar da minha companhia uma vez ao mês.</p>
                  <p>Sou cordial e autoritário, o acompanhante ideal para te iniciar em suas maiores fantasias sexuais.</p>
                  
                  <h3 className="font-semibold text-primary/90 mt-4">Durante as sessões</h3>
                  <p>Gosto de proporcionar experiências únicas libertando os desejos mais obscuros e reprimidos. Realizo vários fetiches sendo minhas práticas com mais experiência: D/s, fisting, pet-play, pissing, spit, leather, anal play, nipple play, ass play, spanking, humilhação, CBT, wax, sissificação, e-stim, bondage, asfixia. Disponho de acessórios e brinquedos para aquecer a relação.</p>
                  <p>Para aqueles que não têm fantasias e fetiches, podemos ter uma relação sexual normal sem práticas.</p>
                  <p>Tudo à disposição em um ambiente climatizado, seguro e confortável, com chuveiro quente, toalha limpa, sabonete, álcool gel, camisinha e lubrificante. Contrate-me no WhatsApp e me encontre aqui no meu local.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
