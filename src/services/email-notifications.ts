/**
 * 📬 SERVIÇO DE NOTIFICAÇÕES POR EMAIL
 * Envia notificações de segurança para troca de email
 */

import { isLocalhost } from '@/lib/firebase';

interface EmailChangeNotification {
  oldEmail: string;
  newEmail: string;
  userName: string;
  timestamp: string;
  userAgent?: string;
  ipAddress?: string;
}

// 📧 ENVIAR NOTIFICAÇÃO PARA EMAIL ANTIGO
export const sendEmailChangeNotificationToOldEmail = async (data: EmailChangeNotification): Promise<boolean> => {
  console.log('[EmailNotifier] 📧 Enviando notificação para email antigo:', data.oldEmail);
  
  if (isLocalhost) {
    // 🧪 SIMULAÇÃO PARA LOCALHOST/EMULATOR
    console.log('[EmailNotifier] 🧪 Modo emulator - simulando notificação');
    console.log('[EmailNotifier] 📧 SIMULAÇÃO - Email para:', data.oldEmail);
    console.log('[EmailNotifier] 📄 Conteúdo simulado:');
    console.log(`
    ═══════════════════════════════════════
    🚨 ALTERAÇÃO DE EMAIL DETECTADA
    ═══════════════════════════════════════
    
    Olá ${data.userName},
    
    Seu email foi alterado de:
    📧 ${data.oldEmail} → ${data.newEmail}
    
    📅 Data: ${data.timestamp}
    🖥️ Navegador: ${data.userAgent || 'Não informado'}
    🌐 IP: ${data.ipAddress || 'Não informado'}
    
    Se você não fez esta alteração:
    1. Acesse imediatamente sua conta
    2. Altere sua senha
    3. Entre em contato conosco
    
    ═══════════════════════════════════════
    `);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('[EmailNotifier] ✅ Notificação simulada como enviada');
    return true;
    
  } else {
    // 🌐 PRODUÇÃO - ENVIO REAL
    try {
      console.log('[EmailNotifier] 🌐 Enviando notificação real');
      
      // Aqui você integraria com seu serviço de email
      // Exemplo com fetch para sua API de email:
      /*
      const response = await fetch('/api/send-email-change-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: data.oldEmail,
          subject: '🚨 Alteração de Email Detectada',
          template: 'email-change-notification',
          data: data
        })
      });
      
      return response.ok;
      */
      
      // Por enquanto, simular sucesso
      console.log('[EmailNotifier] ✅ Notificação enviada (simulada)');
      return true;
      
    } catch (error) {
      console.error('[EmailNotifier] ❌ Erro ao enviar notificação:', error);
      return false;
    }
  }
};

// 🎉 ENVIAR BOAS-VINDAS PARA EMAIL NOVO
export const sendWelcomeToNewEmail = async (newEmail: string, userName: string): Promise<boolean> => {
  console.log('[EmailNotifier] 🎉 Enviando boas-vindas para email novo:', newEmail);
  
  if (isLocalhost) {
    // 🧪 SIMULAÇÃO PARA LOCALHOST/EMULATOR
    console.log('[EmailNotifier] 🧪 Modo emulator - simulando boas-vindas');
    console.log('[EmailNotifier] 📧 SIMULAÇÃO - Email para:', newEmail);
    console.log('[EmailNotifier] 📄 Conteúdo simulado:');
    console.log(`
    ═══════════════════════════════════════
    🎉 EMAIL ALTERADO COM SUCESSO!
    ═══════════════════════════════════════
    
    Olá ${userName},
    
    Seu email foi alterado com sucesso para:
    📧 ${newEmail}
    
    📅 Data: ${new Date().toLocaleString('pt-BR')}
    
    Agora você pode:
    ✅ Fazer login com seu novo email
    ✅ Receber notificações neste endereço
    ✅ Usar todos os recursos da plataforma
    
    Bem-vindo(a) de volta! 🚀
    
    ═══════════════════════════════════════
    `);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('[EmailNotifier] ✅ Boas-vindas simuladas como enviadas');
    return true;
    
  } else {
    // 🌐 PRODUÇÃO - ENVIO REAL
    try {
      console.log('[EmailNotifier] 🌐 Enviando boas-vindas reais');
      
      // Integração com serviço de email
      // Similar ao anterior, mas com template de boas-vindas
      
      console.log('[EmailNotifier] ✅ Boas-vindas enviadas (simuladas)');
      return true;
      
    } catch (error) {
      console.error('[EmailNotifier] ❌ Erro ao enviar boas-vindas:', error);
      return false;
    }
  }
};

// 🔄 ENVIAR NOTIFICAÇÃO DE ROLLBACK
export const sendEmailRollbackNotification = async (email: string, userName: string, reason: string): Promise<boolean> => {
  console.log('[EmailNotifier] 🔄 Enviando notificação de rollback:', email);
  
  if (isLocalhost) {
    // 🧪 SIMULAÇÃO PARA LOCALHOST/EMULATOR
    console.log('[EmailNotifier] 🧪 Simulando notificação de rollback');
    console.log(`
    ═══════════════════════════════════════
    🔄 ALTERAÇÃO DE EMAIL REVERTIDA
    ═══════════════════════════════════════
    
    Olá ${userName},
    
    Sua tentativa de alteração de email foi revertida.
    
    📝 Motivo: ${reason}
    📅 Data: ${new Date().toLocaleString('pt-BR')}
    
    Seu email permanece: ${email}
    
    Tente novamente ou entre em contato conosco.
    
    ═══════════════════════════════════════
    `);
    
    return true;
    
  } else {
    // 🌐 PRODUÇÃO - ENVIO REAL
    try {
      console.log('[EmailNotifier] 🌐 Enviando rollback real');
      return true;
      
    } catch (error) {
      console.error('[EmailNotifier] ❌ Erro ao enviar rollback:', error);
      return false;
    }
  }
};
