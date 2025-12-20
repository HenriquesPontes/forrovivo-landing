# Deploy Agora - Repositório: HenriquesPontes/forrovivo-landing

## ✅ Comandos Adaptados para Seu Projeto

**NÃO execute o comando do README.md** - você já tem um README completo!

Execute estes comandos no terminal:

```bash
cd "/Users/dev/Developer/FORRO Landing Page"

# 1. Inicializar Git (se ainda não fez)
git init

# 2. Adicionar TODOS os arquivos do projeto
git add .

# 3. Primeiro commit
git commit -m "Initial commit: ForroVivo landing page"

# 4. Renomear branch para main
git branch -M main

# 5. Adicionar remote (seu repositório)
git remote add origin https://github.com/HenriquesPontes/forrovivo-landing.git

# 6. Verificar remote (opcional - para confirmar)
git remote -v

# 7. Push para GitHub
git push -u origin main
```

## ⚠️ Se o repositório já tem conteúdo

Se você já criou o repositório com README no GitHub, use:

```bash
# Ao invés de apenas 'git push', faça:
git pull origin main --allow-unrelated-histories
# Resolva conflitos se houver
git push -u origin main
```

Ou force o push (substitui o conteúdo remoto):

```bash
git push -u origin main --force
```

## 🔐 Autenticação

Se pedir usuário/senha:

**Username:** `HenriquesPontes`

**Password:** Use seu Personal Access Token (não sua senha do GitHub)
- Crie em: https://github.com/settings/tokens
- Permissões: `repo` (todas as permissões de repo)
- Use como senha quando pedir

## 📋 Após o Push

1. Vá para: https://github.com/HenriquesPontes/forrovivo-landing

2. **Habilitar GitHub Pages:**
   - Settings > Pages
   - Source: Selecione **"GitHub Actions"**
   - Salve

3. **Configurar domínio:**
   - Settings > Pages > Custom domain: `forrovivo.com`
   - Marque "Enforce HTTPS"

4. **Aguardar deploy:**
   - Vá para Actions tab
   - Aguarde workflow "Deploy to GitHub Pages" completar (~2-5 min)

5. **Configurar DNS:**
   - No seu provedor de DNS, adicione:
   - Tipo: A, Nome: @, Valores: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

## ✅ Verificar Deploy

- Workflow: https://github.com/HenriquesPontes/forrovivo-landing/actions
- Site: https://forrovivo.com (após DNS propagar)

## 🔄 Atualizações Futuras

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

Deploy automático acontece em ~2-5 minutos!

