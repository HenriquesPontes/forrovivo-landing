# Configuração GitHub Pages - Passo a Passo Completo

## ✅ Status Atual

- ✅ Código enviado para GitHub
- ✅ Repositório: https://github.com/HenriquesPontes/forrovivo-landing
- ✅ Branch: `main`
- ✅ Workflow de deploy configurado: `.github/workflows/deploy.yml`

## 📋 Passo 1: Habilitar GitHub Pages

1. **Acesse o repositório:**
   - https://github.com/HenriquesPontes/forrovivo-landing

2. **Vá para Settings:**
   - Clique na aba **"Settings"** (no topo do repositório)

3. **Configure Pages:**
   - No menu lateral esquerdo, clique em **"Pages"** (em "Code and automation")
   - Em **"Source"**, selecione: **"GitHub Actions"**
   - Clique em **"Save"**

4. **Verificar:**
   - Você verá a mensagem: "Your site is ready to be published"

## 📋 Passo 2: Verificar Deploy Automático

O deploy deve começar automaticamente após habilitar Pages, OU quando você fizer o próximo push.

1. **Vá para Actions:**
   - Clique na aba **"Actions"** (no topo do repositório)

2. **Verificar workflow:**
   - Você verá um workflow chamado **"Deploy to GitHub Pages"**
   - Clique nele para ver os detalhes

3. **Status do deploy:**
   - 🟡 **Amarelo (Running)**: Deploy em andamento (2-5 minutos)
   - 🟢 **Verde (Success)**: Deploy concluído com sucesso
   - 🔴 **Vermelho (Failed)**: Verificar logs para erros

4. **Após sucesso:**
   - Seu site estará disponível temporariamente em: `https://henriquespontes.github.io/forrovivo-landing/`
   - OU no domínio personalizado (após configurar DNS)

## 📋 Passo 3: Configurar Domínio Personalizado (forrovivo.com)

### 3.1 No GitHub:

1. **Settings > Pages:**
   - Em **"Custom domain"**, digite: `forrovivo.com`
   - Clique em **"Save"**

2. **Aguardar verificação:**
   - GitHub vai verificar o domínio
   - Pode levar alguns minutos

3. **Enforce HTTPS:**
   - Após a verificação, marque **"Enforce HTTPS"**
   - Isso força conexão segura

### 3.2 No Provedor de DNS:

Configure no serviço onde você comprou o domínio `forrovivo.com` (ex: GoDaddy, Namecheap, Cloudflare, etc.)

**Opção A - Apex Domain (forrovivo.com - SEM www) - RECOMENDADO:**

Adicione **4 registros A** (todos com os mesmos valores):

```
Registro 1:
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.108.153
TTL: 3600 (ou padrão)

Registro 2:
Tipo: A
Nome: @
Valor: 185.199.109.153
TTL: 3600

Registro 3:
Tipo: A
Nome: @
Valor: 185.199.110.153
TTL: 3600

Registro 4:
Tipo: A
Nome: @
Valor: 185.199.111.153
TTL: 3600
```

**Opção B - Subdomain (www.forrovivo.com):**

```
Tipo: CNAME
Nome: www
Valor: henriquespontes.github.io
TTL: 3600
```

**Nota:** Se você quer AMBOS (com e sem www), adicione ambos os registros.

### 3.3 Verificar DNS:

Após configurar DNS, pode levar de 10 minutos a 24 horas para propagar.

**Verificar propagação:**
- Use: https://dnschecker.org
- Digite: `forrovivo.com`
- Verifique se os IPs aparecem em servidores DNS ao redor do mundo

**Ou via terminal:**
```bash
dig forrovivo.com +short
# Deve retornar os 4 IPs
```

## 📋 Passo 4: Verificar Site Funcionando

1. **Após DNS propagar (geralmente 1-2 horas):**
   - Acesse: https://forrovivo.com
   - Deve carregar o site

2. **Testar páginas:**
   - Home: https://forrovivo.com/
   - Learn More: https://forrovivo.com/learn-more
   - Privacy: https://forrovivo.com/privacy
   - Terms: https://forrovivo.com/terms
   - Contact: https://forrovivo.com/contact

3. **Verificar assets:**
   - Ícone carrega: https://forrovivo.com/ICON/icon.png
   - CSS/JS carregam corretamente
   - Imagens aparecem

## 📋 Passo 5: Configurar Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente (ex: Google Analytics, download links):

1. **Settings > Secrets and variables > Actions:**
   - Clique em **"New repository secret"**

2. **Adicione cada variável:**
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (seu ID do Google Analytics)
   - Clique em **"Add secret"**
   - Repita para outras variáveis necessárias

3. **Atualizar workflow:**
   - Edite `.github/workflows/deploy.yml`
   - Descomente as linhas no `env:` do job `build`
   - Commit e push:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Enable environment variables in deploy"
   git push origin main
   ```

## 🔍 Troubleshooting

### Deploy não inicia

- **Verificar se Pages está habilitado:** Settings > Pages > Source deve ser "GitHub Actions"
- **Verificar Actions:** Actions tab deve mostrar workflows
- **Fazer um pequeno commit para disparar:**
  ```bash
  git commit --allow-empty -m "Trigger deploy"
  git push origin main
  ```

### Deploy falha

- **Ver logs:** Actions > Deploy to GitHub Pages > Job details
- **Erro comum:** Dependências
  - Verificar se `package.json` tem todas as dependências
  - Verificar se `npm ci` funciona localmente

### Domínio não funciona

- **Verificar DNS propagou:** Use dnschecker.org
- **Verificar no GitHub:** Settings > Pages > Custom domain deve mostrar status
- **Aguardar:** DNS pode levar até 24h para propagar completamente

### HTTPS não funciona

- **Aguardar:** HTTPS é habilitado automaticamente após DNS propagar
- **Verificar:** Settings > Pages > "Enforce HTTPS" deve estar marcado
- **Pode levar:** Algumas horas após DNS propagar

### Assets 404

- **Verificar build:** `npm run build` localmente e verificar se `build/ICON/` existe
- **Verificar paths:** Devem ser relativos (começar com `/`)
- **Verificar service worker:** Pode estar cacheando versão antiga

## ✅ Checklist Final

- [ ] GitHub Pages habilitado (Settings > Pages > Source: GitHub Actions)
- [ ] Deploy completou com sucesso (Actions tab)
- [ ] Domínio configurado no GitHub (Settings > Pages > Custom domain)
- [ ] DNS configurado no provedor (4 registros A ou CNAME)
- [ ] DNS propagou (verificado com dnschecker.org)
- [ ] Site acessível em https://forrovivo.com
- [ ] HTTPS funcionando (cadeado verde no navegador)
- [ ] Todas as páginas carregam corretamente
- [ ] Assets (imagens, CSS, JS) carregam corretamente
- [ ] Formulário de contato funciona
- [ ] Idioma EN/PT funciona
- [ ] Links de download configurados (quando apps estiverem publicados)

## 🔗 Links Úteis

- **Repositório:** https://github.com/HenriquesPontes/forrovivo-landing
- **Actions:** https://github.com/HenriquesPontes/forrovivo-landing/actions
- **Settings:** https://github.com/HenriquesPontes/forrovivo-landing/settings
- **Pages Settings:** https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
- **Site temporário:** https://henriquespontes.github.io/forrovivo-landing/
- **DNS Checker:** https://dnschecker.org
- **GitHub Pages Docs:** https://docs.github.com/en/pages

## 📝 Notas

- O deploy é **automático** a cada push para `main`
- DNS pode levar **até 24 horas** para propagar completamente
- HTTPS é **automático** após DNS propagar
- **Não** delete o branch `main` ou o diretório `.github/workflows/`
- Para atualizar o site: `git push origin main` (deploy automático)

