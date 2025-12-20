# GitHub Pages Deployment Guide

Este guia explica como configurar e fazer deploy do site ForroVivo para GitHub Pages com domínio personalizado `forrovivo.com`.

## Pré-requisitos

1. Repositório GitHub criado
2. Domínio `forrovivo.com` configurado (DNS)
3. GitHub Pages habilitado no repositório

## Configuração Inicial

### 1. Habilitar GitHub Pages

1. Vá para **Settings** > **Pages** no seu repositório GitHub
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

### 2. Configurar Branch Principal

O workflow está configurado para fazer deploy das branches `main` ou `master`. Certifique-se de que seu código está em uma dessas branches:

```bash
git checkout main  # ou master
git push origin main
```

### 3. Configurar Domínio Personalizado

1. No GitHub, vá para **Settings** > **Pages**
2. Em **Custom domain**, digite: `forrovivo.com`
3. Marque **Enforce HTTPS** (quando disponível)

### 4. Configurar DNS

Configure os seguintes registros DNS no seu provedor de domínio:

**Opção A: Apex Domain (recomendado)**
```
Tipo: A
Nome: @
Valor: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
```

**Opção B: Subdomain (www)**
```
Tipo: CNAME
Nome: www
Valor: seu-usuario.github.io
```

**Nota:** GitHub Pages agora suporta apex domains (sem www) via A records.

### 5. Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente no build (ex: Analytics, download links), configure GitHub Secrets:

1. Vá para **Settings** > **Secrets and variables** > **Actions**
2. Clique em **New repository secret**
3. Adicione cada variável:
   - `VITE_GA_MEASUREMENT_ID`
   - `VITE_ANALYTICS_ENABLED`
   - `VITE_IOS_DOWNLOAD_URL`
   - `VITE_ANDROID_DOWNLOAD_URL`
   - etc.

4. Depois, descomente as linhas correspondentes no arquivo `.github/workflows/deploy.yml`

## Deploy Automático

O deploy acontece automaticamente quando você:

1. **Faz push para `main` ou `master`:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

2. **Ou manualmente via GitHub Actions:**
   - Vá para **Actions** tab
   - Selecione **Deploy to GitHub Pages**
   - Clique em **Run workflow**

## Verificar Deploy

1. Aguarde alguns minutos após o push
2. Verifique o status em **Actions** tab
3. Acesse `https://forrovivo.com` para ver o site

## Estrutura do Workflow

O workflow (`.github/workflows/deploy.yml`) faz o seguinte:

1. **Build Job:**
   - Instala Node.js 20
   - Instala dependências (`npm ci`)
   - Faz build do projeto (`npm run build`)
   - Faz upload do build para GitHub Pages

2. **Deploy Job:**
   - Faz deploy do build para GitHub Pages

## Troubleshooting

### Site não carrega

1. Verifique se o workflow completou com sucesso (Actions tab)
2. Verifique configurações de DNS (pode levar até 24h para propagar)
3. Verifique se o domínio está configurado em Settings > Pages

### Assets não carregam (404)

- O Vite já está configurado para usar caminhos relativos
- Se ainda tiver problemas, verifique se todos os assets estão no diretório `build/`

### Build falha

1. Verifique logs em **Actions** tab
2. Teste build localmente: `npm run build`
3. Verifique se todas as dependências estão no `package.json`

### HTTPS não funciona

- GitHub Pages automaticamente fornece HTTPS
- Pode levar alguns minutos após configurar o domínio
- Certifique-se de que **Enforce HTTPS** está marcado em Settings > Pages

## Manter Site Atualizado

Para atualizar o site:

```bash
# 1. Faça suas alterações
# 2. Commit e push
git add .
git commit -m "Update: descrição das mudanças"
git push origin main

# 3. Aguarde o deploy automático (2-5 minutos)
```

## Estrutura de Arquivos

Após o build, o GitHub Pages serve os arquivos do diretório `build/`:
- `index.html` - Página principal
- `assets/` - JS, CSS e imagens
- `ICON/` - Ícones do site
- `manifest.json` - PWA manifest
- `robots.txt` - SEO
- `sitemap.xml` - Sitemap
- `sw.js` - Service Worker

## Notas Importantes

- ⚠️ **Não faça commit do arquivo `.env`** - use GitHub Secrets para variáveis sensíveis
- ✅ O workflow usa `npm ci` para instalação rápida e confiável
- ✅ O build é otimizado automaticamente pelo Vite
- ✅ Service Worker funciona apenas em HTTPS (GitHub Pages fornece HTTPS)

## Suporte

Para problemas com GitHub Pages, consulte:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

