# 🚀 Guia Completo de Deploy - Kit Mudança de Vida

Este guia te levará passo a passo desde a criação do repositório no GitHub até o site estar no ar na Vercel.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter:

1. ✅ Conta no [GitHub](https://github.com) (gratuita)
2. ✅ Conta na [Vercel](https://vercel.com) (gratuita)
3. ✅ Git instalado no seu computador ([Download aqui](https://git-scm.com/downloads))

---

## 🎯 PARTE 1: Criar Repositório no GitHub

### Passo 1: Baixar os arquivos do projeto

1. No painel do Manus, clique no botão **"Download"** ou **"Code"** para baixar todos os arquivos do projeto
2. Extraia o arquivo ZIP em uma pasta no seu computador (ex: `C:\Projetos\kitmudanca-v2`)

### Passo 2: Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os campos:
   - **Repository name**: `landing-page-matadora`
   - **Description**: `Landing Page Kit Mudança de Vida - 4ª Edição`
   - **Visibility**: Escolha **Public** ou **Private** (recomendo Private)
   - **NÃO** marque "Add a README file"
   - **NÃO** marque "Add .gitignore"
   - **NÃO** marque "Choose a license"
5. Clique em **"Create repository"**

### Passo 3: Fazer upload dos arquivos para o GitHub

Você tem duas opções:

#### OPÇÃO A: Usando a Interface Web do GitHub (Mais Fácil)

1. Na página do repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos e pastas do projeto para a área de upload
3. Aguarde o upload completar
4. No campo "Commit message", escreva: `Initial commit - Kit Mudança de Vida`
5. Clique em **"Commit changes"**

#### OPÇÃO B: Usando Git via Terminal/CMD (Mais Profissional)

1. Abra o Terminal (Mac/Linux) ou CMD/PowerShell (Windows)
2. Navegue até a pasta do projeto:
   ```bash
   cd C:\Projetos\kitmudanca-v2
   ```

3. Execute os seguintes comandos um por um:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Kit Mudança de Vida"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/landing-page-matadora.git
   git push -u origin main
   ```

   **IMPORTANTE**: Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!

4. Quando solicitado, faça login com suas credenciais do GitHub

---

## 🌐 PARTE 2: Deploy na Vercel

### Passo 1: Conectar GitHub com Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** ou **"Login"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar sua conta do GitHub

### Passo 2: Importar o Projeto

1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá uma lista dos seus repositórios do GitHub
3. Encontre **"landing-page-matadora"** e clique em **"Import"**

### Passo 3: Configurar o Deploy

A Vercel detectará automaticamente que é um projeto Vite. Verifique se as configurações estão assim:

- **Framework Preset**: Vite
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

**NÃO precisa alterar nada!** As configurações já estão corretas no arquivo `vercel.json`.

### Passo 4: Deploy!

1. Clique em **"Deploy"**
2. Aguarde alguns minutos (geralmente 2-3 minutos)
3. 🎉 **Pronto!** Seu site está no ar!

### Passo 5: Acessar seu site

Após o deploy, a Vercel fornecerá:

- **URL temporária**: `https://landing-page-matadora.vercel.app`
- Você pode configurar um domínio personalizado depois

---

## 🎨 PARTE 3: Configurar Domínio Personalizado (Opcional)

### Se você já tem um domínio:

1. No dashboard da Vercel, clique no seu projeto
2. Vá em **"Settings"** → **"Domains"**
3. Clique em **"Add"**
4. Digite seu domínio (ex: `kitmudancadevida.com.br`)
5. Siga as instruções para configurar o DNS

### Se você NÃO tem um domínio:

Você pode comprar um domínio em:
- [Registro.br](https://registro.br) (domínios .br)
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)

---

## 🔄 PARTE 4: Atualizações Futuras

Sempre que você fizer alterações no site:

### Método 1: Via GitHub Web

1. Acesse seu repositório no GitHub
2. Navegue até o arquivo que quer editar
3. Clique no ícone de lápis para editar
4. Faça suas alterações
5. Clique em **"Commit changes"**
6. A Vercel fará o deploy automático em 2-3 minutos!

### Método 2: Via Git (Terminal)

```bash
cd C:\Projetos\kitmudanca-v2
# Faça suas alterações nos arquivos
git add .
git commit -m "Descrição das alterações"
git push
```

A Vercel detecta automaticamente e faz o deploy!

---

## ✅ Checklist Final

Antes de considerar o deploy concluído, verifique:

- [ ] Site abre corretamente na URL da Vercel
- [ ] Todos os botões "PARTICIPAR AGORA" abrem o link correto
- [ ] Imagens estão carregando
- [ ] Site funciona bem no celular
- [ ] Animações ao scroll funcionam
- [ ] FAQ abre e fecha corretamente
- [ ] Informações dos ganhadores estão corretas
- [ ] Licença 8543.07/2025 aparece em todos os lugares

---

## 🆘 Problemas Comuns

### "Build failed" na Vercel

**Solução**: Verifique se todos os arquivos foram enviados corretamente para o GitHub, incluindo `package.json` e `vite.config.ts`.

### Página em branco após deploy

**Solução**: Verifique se o arquivo `vercel.json` está no repositório. Ele configura o roteamento correto.

### Imagens não aparecem

**Solução**: Certifique-se de que a pasta `client/public` com todas as imagens foi enviada para o GitHub.

### Botões não abrem o link

**Solução**: Verifique se o link `https://92projects.com/kitmudancadevida` está correto no código.

---

## 📞 Suporte

Se tiver qualquer problema:

1. Verifique os logs de build na Vercel (aba "Deployments")
2. Consulte a [documentação da Vercel](https://vercel.com/docs)
3. Entre em contato com o suporte da Vercel (muito rápido!)

---

## 🎉 Parabéns!

Seu site está no ar e pronto para converter! 🚀

**URL do projeto**: `https://landing-page-matadora.vercel.app`

Boa sorte com as vendas! 💰✨

---

*Criado por Manus AI - © 2024 92 Projects*
