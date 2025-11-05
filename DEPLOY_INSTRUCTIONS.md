# 🚀 Instruções para Deploy na Vercel

## 📋 Pré-requisitos
- Conta no GitHub
- Conta na Vercel (pode usar login do GitHub)

## 🔧 Passo a Passo

### 1. Criar Repositório no GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `landing-page-matadora`
3. Deixe como **Public**
4. **NÃO** inicialize com README, .gitignore ou license
5. Clique em "Create repository"

### 2. Fazer Push do Código
Execute os comandos abaixo no terminal local (após baixar o código):

\`\`\`bash
cd kitmudanca-v2
git init
git add .
git commit -m "Initial commit: Landing Page Matadora"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/landing-page-matadora.git
git push -u origin main
\`\`\`

### 3. Deploy na Vercel
1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Importe o repositório `landing-page-matadora`
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm run build` (ou deixe o padrão)
   - **Output Directory**: `dist` (ou deixe o padrão)
5. Clique em "Deploy"

### 4. Aguarde o Deploy
- O processo leva cerca de 1-2 minutos
- Você receberá uma URL do tipo: `https://landing-page-matadora.vercel.app`

## ✅ Pronto!
Seu site estará no ar e funcionando perfeitamente!

## 🔗 Links Importantes
- Botões de compra redirecionam para: https://92projects.com/kitmudancadevida
- Instagram: @92.projects

## 📝 Notas
- O site é 100% estático (sem backend)
- Carregamento super rápido
- Responsivo para mobile, tablet e desktop
- Animações sutis ao scroll
