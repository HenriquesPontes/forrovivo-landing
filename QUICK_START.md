# Quick Start - Deploy ForroVivo

## ⚡ Comandos Rápidos

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Initial commit: ForroVivo landing page"
git branch -M main

# 2. Adicionar remote (SUBSTITUA pelos seus dados)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# 3. Push
git push -u origin main
```

## 📋 Checklist

Antes de fazer push:

- [ ] Criar repositório no GitHub (https://github.com/new)
- [ ] Substituir `SEU-USUARIO` e `NOME-DO-REPO` nos comandos
- [ ] Verificar que `.gitignore` está funcionando (não commitar `node_modules`, `.env`, etc.)

Depois do push:

- [ ] Settings > Pages > Source: GitHub Actions
- [ ] Settings > Pages > Custom domain: `forrovivo.com`
- [ ] Configurar DNS no provedor do domínio
- [ ] Aguardar deploy (verificar Actions tab)

## 🔐 Autenticação

Se `git push` pedir autenticação:

**Opção 1 - Token (Recomendado):**
- Crie token: https://github.com/settings/tokens
- Permissões: `repo`
- Use como senha quando pedir

**Opção 2 - SSH:**
```bash
git remote set-url origin git@github.com:SEU-USUARIO/NOME-DO-REPO.git
```

## 📚 Mais Detalhes

- Setup completo: `GIT_SETUP.md`
- Deploy detalhado: `DEPLOY_INSTRUCTIONS.md`
- GitHub Pages: `GITHUB_PAGES_SETUP.md`

