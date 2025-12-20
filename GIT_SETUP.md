# Setup Git e Deploy - Passo a Passo

Execute estes comandos no seu terminal, dentro da pasta do projeto:

## 1. Inicializar Git e Primeiro Commit

```bash
cd "/Users/dev/Developer/FORRO Landing Page"

# Inicializar repositório
git init

# Adicionar todos os arquivos (exceto os ignorados pelo .gitignore)
git add .

# Verificar o que será commitado
git status

# Fazer commit inicial
git commit -m "Initial commit: ForroVivo landing page"

# Renomear branch para main (se necessário)
git branch -M main
```

## 2. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name:** `forrovivo-landing` (ou o nome que preferir)
3. **Visibility:** Public ou Private (sua escolha)
4. **NÃO marque** "Initialize with README" (já temos arquivos)
5. Clique em **"Create repository"**

## 3. Conectar ao Repositório Remoto

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub:**

```bash
# Adicionar remote (SUBSTITUA SEU-USUARIO e NOME-DO-REPO)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# Verificar remote configurado
git remote -v

# Fazer push
git push -u origin main
```

**Exemplo real:**
Se seu usuário é `john` e o repo é `forrovivo-landing`:
```bash
git remote add origin https://github.com/john/forrovivo-landing.git
git push -u origin main
```

## 4. Configurar GitHub Pages

1. No GitHub, vá para o repositório
2. **Settings** > **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. Salve

## 5. Configurar Domínio Personalizado

1. Ainda em **Settings** > **Pages**
2. Em **Custom domain**, digite: `forrovivo.com`
3. Marque **"Enforce HTTPS"** (quando disponível)
4. Salve

## 6. Configurar DNS

No seu provedor de DNS (onde você comprou o domínio `forrovivo.com`):

### Opção A - Apex Domain (sem www) - RECOMENDADO

Adicione 4 registros A:

```
Tipo: A
Nome: @ (ou deixe em branco, dependendo do provedor)
Valor: 185.199.108.153
TTL: 3600 (ou padrão)

Tipo: A
Nome: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @
Valor: 185.199.111.153
TTL: 3600
```

### Opção B - Subdomain (www)

```
Tipo: CNAME
Nome: www
Valor: seu-usuario.github.io
TTL: 3600
```

## 7. Aguardar e Verificar

- **DNS:** Pode levar até 24h para propagar (normalmente 1-2h)
- **Deploy:** Leva 2-5 minutos após o push
- **Verificar deploy:** Vá para **Actions** tab no GitHub

## Comandos Úteis

### Ver status
```bash
git status
```

### Ver commits
```bash
git log --oneline
```

### Fazer push de atualizações futuras
```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

### Verificar remote
```bash
git remote -v
```

### Mudar remote (se necessário)
```bash
git remote set-url origin https://github.com/SEU-USUARIO/NOVO-REPO.git
```

## Troubleshooting

### Erro: "repository not found"
- Verifique se o repositório foi criado no GitHub
- Verifique se o nome do usuário e repo estão corretos
- Verifique se você tem permissão de escrita

### Erro: "authentication failed"
- GitHub não aceita mais senha via HTTPS
- Use Personal Access Token ou configure SSH
- Para token: use como senha quando pedir

### Erro: "branch 'main' has no upstream branch"
```bash
git push -u origin main
```
O `-u` configura o upstream automaticamente.

### Token GitHub (se necessário)
Se precisar usar token para autenticação:
1. Crie em: https://github.com/settings/tokens
2. Permissões: `repo` (tudo)
3. Use como senha quando `git push` pedir

**⚠️ IMPORTANTE:** Não commite tokens no código!

## Próximos Passos Após Deploy

1. Aguardar workflow completar (Actions tab)
2. Verificar site: `https://forrovivo.com`
3. Testar todas as páginas
4. Verificar se assets carregam corretamente

## Suporte

- [GitHub Docs](https://docs.github.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- Ver também: `GITHUB_PAGES_SETUP.md` e `DEPLOY_INSTRUCTIONS.md`

