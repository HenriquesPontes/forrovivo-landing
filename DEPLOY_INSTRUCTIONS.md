# Instruções de Deploy - ForroVivo

## ⚠️ Segurança

**NÃO commite o token GitHub no código!** Se você tem um token:
- Revogue se foi commitado acidentalmente
- Use GitHub Secrets para armazenar (se realmente necessário)

## Deploy para GitHub Pages (Recomendado)

### Para GitHub Pages, você NÃO precisa de token pessoal!

O GitHub fornece automaticamente `GITHUB_TOKEN` para Actions.

### Passo a Passo:

1. **Criar Repositório no GitHub:**
   ```bash
   # Se ainda não criou o repositório local
   git init
   git add .
   git commit -m "Initial commit: ForroVivo landing page"
   
   # Adicione o remote (substitua com sua URL)
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Habilitar GitHub Pages:**
   - Vá para o repositório no GitHub
   - Settings > Pages
   - Source: Selecione **"GitHub Actions"**
   - Salve

3. **Configurar Domínio (forrovivo.com):**
   - Settings > Pages > Custom domain
   - Digite: `forrovivo.com`
   - Marque **"Enforce HTTPS"**

4. **Configurar DNS:**
   
   Configure no seu provedor de DNS (onde comprou o domínio):
   
   **Opção A - Apex Domain (sem www):**
   ```
   Tipo: A
   Nome: @ (ou deixe em branco)
   Valores:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   TTL: 3600 (ou padrão)
   ```
   
   **Opção B - Subdomain (www):**
   ```
   Tipo: CNAME
   Nome: www
   Valor: seu-usuario.github.io
   TTL: 3600
   ```

5. **Aguardar:**
   - DNS pode levar até 24h para propagar
   - Deploy automático acontece em ~2-5 minutos após push
   - Verifique status em: Actions tab

### Deploy Automático

Depois de configurado, cada push para `main` faz deploy automático:

```bash
git add .
git commit -m "Update: descrição das mudanças"
git push origin main
```

### Verificar Deploy

1. **GitHub Actions:**
   - Vá para Actions tab no GitHub
   - Veja se o workflow "Deploy to GitHub Pages" completou com sucesso

2. **Site:**
   - Acesse: `https://forrovivo.com`
   - Ou temporariamente: `https://seu-usuario.github.io` (até DNS propagar)

## Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente (ex: Google Analytics):

1. **GitHub Secrets:**
   - Settings > Secrets and variables > Actions
   - New repository secret
   - Adicione cada variável:
     - `VITE_GA_MEASUREMENT_ID`
     - `VITE_ANALYTICS_ENABLED`
     - etc.

2. **Atualizar Workflow:**
   - Edite `.github/workflows/deploy.yml`
   - Descomente as linhas de `env:` no job `build`
   - Use: `${{ secrets.VITE_GA_MEASUREMENT_ID }}`

## Troubleshooting

### Build falha
- Verifique logs em Actions tab
- Teste build local: `npm run build`

### DNS não funciona
- Aguarde até 24h para propagação
- Use ferramentas como `dig` ou `nslookup` para verificar

### Site não carrega
- Verifique se workflow completou
- Verifique configuração de domínio em Settings > Pages
- Tente acessar via `seu-usuario.github.io` primeiro

### Assets 404
- Verifique se `build/ICON/` foi criado
- Verifique paths no código (devem ser relativos)

## Suporte

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- Ver também: `GITHUB_PAGES_SETUP.md`

