# ✅ Checklist de Deploy - ForroVivo

## Status Atual

- ✅ Repositório criado no GitHub
- ✅ Código enviado (push concluído)
- ✅ Workflow de deploy configurado
- ⏳ **Próximo:** Habilitar GitHub Pages

## Checklist Rápido

### 1. GitHub Pages
- [ ] Acessar: https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
- [ ] Source: Selecionar **"GitHub Actions"**
- [ ] Salvar

### 2. Verificar Deploy
- [ ] Acessar: https://github.com/HenriquesPontes/forrovivo-landing/actions
- [ ] Verificar workflow "Deploy to GitHub Pages" está rodando/completo
- [ ] Status deve ser verde ✅

### 3. Domínio Personalizado
- [ ] Settings > Pages > Custom domain: `forrovivo.com`
- [ ] Salvar
- [ ] Aguardar verificação do GitHub

### 4. DNS
- [ ] No provedor do domínio, adicionar 4 registros A:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- [ ] Aguardar propagação (1-24h)

### 5. Testar Site
- [ ] https://forrovivo.com carrega
- [ ] Todas as páginas funcionam
- [ ] Assets carregam
- [ ] HTTPS funciona (cadeado verde)

## Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver remote configurado
git remote -v

# Atualizar site (faz deploy automático)
git add .
git commit -m "Update: descrição"
git push origin main
```

## Links Importantes

- 🔗 Repositório: https://github.com/HenriquesPontes/forrovivo-landing
- 🔗 Actions: https://github.com/HenriquesPontes/forrovivo-landing/actions
- 🔗 Pages Settings: https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
- 🔗 Site: https://forrovivo.com (após DNS propagar)

## Próximo Passo Imediato

👉 **Acesse agora:** https://github.com/HenriquesPontes/forrovivo-landing/settings/pages

Configure Source como "GitHub Actions" e salve!

