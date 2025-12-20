# 🚀 Configure GitHub Pages AGORA - Guia Visual

## ⚡ PASSO 1: Acessar Configurações do GitHub Pages

### Clique neste link direto:
👉 **https://github.com/HenriquesPontes/forrovivo-landing/settings/pages**

OU siga manualmente:
1. Acesse: https://github.com/HenriquesPontes/forrovivo-landing
2. Clique na aba **"Settings"** (canto superior direito)
3. No menu lateral esquerdo, role para baixo e clique em **"Pages"**

---

## ⚡ PASSO 2: Configurar Source

Na página de configurações do Pages, você verá uma seção chamada **"Source"**.

### O que fazer:
1. **Source:** Clique no dropdown e selecione: **"GitHub Actions"**
2. Clique no botão **"Save"** (ou "Salvar")

### O que você verá:
- Uma mensagem: "Your site is ready to be published"
- Ou: "Your site is published at https://henriquespontes.github.io/forrovivo-landing/"

---

## ⚡ PASSO 3: Verificar Deploy Automático

### Acesse a aba Actions:
👉 **https://github.com/HenriquesPontes/forrovivo-landing/actions**

### O que procurar:
- Você verá um workflow chamado **"Deploy to GitHub Pages"**
- O status pode ser:
  - 🟡 **Amarelo (Running)**: Deploy em andamento (aguarde 2-5 minutos)
  - 🟢 **Verde (✓)**: Deploy concluído com sucesso!
  - 🔴 **Vermelho (✗)**: Erro (clique para ver detalhes)

### Após sucesso:
Seu site estará temporariamente disponível em:
**https://henriquespontes.github.io/forrovivo-landing/**

---

## ⚡ PASSO 4: Configurar Domínio Personalizado (forrovivo.com)

### No GitHub (Settings > Pages):
1. Em **"Custom domain"**, digite: `forrovivo.com`
2. Clique em **"Save"**
3. Aguarde alguns minutos enquanto GitHub verifica o domínio
4. Após verificação, marque **"Enforce HTTPS"** (quando aparecer a opção)

### No Provedor de DNS (onde comprou o domínio):

**Adicione 4 Registros A:**

#### Registro 1:
```
Tipo: A
Nome: @ (ou deixe em branco/vazio)
Valor: 185.199.108.153
TTL: 3600 (ou padrão)
```

#### Registro 2:
```
Tipo: A
Nome: @
Valor: 185.199.109.153
TTL: 3600
```

#### Registro 3:
```
Tipo: A
Nome: @
Valor: 185.199.110.153
TTL: 3600
```

#### Registro 4:
```
Tipo: A
Nome: @
Valor: 185.199.111.153
TTL: 3600
```

**Nota:** Se seu provedor de DNS não aceita `@` como nome, tente deixar o campo vazio ou usar o domínio raiz.

---

## ✅ Checklist Rápido

Marque conforme completa:

- [ ] Acessei Settings > Pages
- [ ] Configurei Source como "GitHub Actions"
- [ ] Salvei as configurações
- [ ] Verifiquei Actions - deploy está rodando/completo
- [ ] Configurei domínio personalizado: `forrovivo.com`
- [ ] Adicionei 4 registros A no DNS
- [ ] Aguardei DNS propagar (pode levar até 24h)
- [ ] Testei acesso: https://forrovivo.com

---

## 🔍 Troubleshooting Rápido

### "Deploy to GitHub Pages" não aparece em Actions

**Solução:**
- Verifique se salvou a configuração de Source
- Faça um pequeno commit para disparar:
  ```bash
  git commit --allow-empty -m "Trigger deploy"
  git push origin main
  ```

### Deploy falha (status vermelho)

**Verifique:**
- Clique no workflow que falhou
- Veja os logs do erro
- Erro comum: falta de dependências - verifique `package.json`

### Domínio não funciona após configurar DNS

**Verifique propagação DNS:**
- Use: https://dnschecker.org
- Digite: `forrovivo.com`
- Verifique se os 4 IPs aparecem em servidores globais
- DNS pode levar 10 minutos a 24 horas para propagar

### HTTPS não funciona

**Aguarde:**
- HTTPS é habilitado automaticamente após DNS propagar
- Pode levar algumas horas após DNS configurar
- Verifique se "Enforce HTTPS" está marcado em Settings > Pages

---

## 📊 Status Esperado Após Configuração

### Imediato (após Step 1-2):
- ✅ GitHub Pages habilitado
- ✅ Deploy automático iniciado
- ✅ Site temporário disponível: `henriquespontes.github.io/forrovivo-landing/`

### Após Deploy Completo (2-5 minutos):
- ✅ Site publicado
- ✅ Workflow mostra status verde
- ✅ Todos os assets carregam

### Após DNS Propagado (1-24 horas):
- ✅ Domínio personalizado funcionando: `forrovivo.com`
- ✅ HTTPS habilitado automaticamente
- ✅ Site acessível via domínio

---

## 🔗 Links Diretos

- **Pages Settings:** https://github.com/HenriquesPontes/forrovivo-landing/settings/pages
- **Actions (Deploy Status):** https://github.com/HenriquesPontes/forrovivo-landing/actions
- **Repositório:** https://github.com/HenriquesPontes/forrovivo-landing
- **Site Temporário:** https://henriquespontes.github.io/forrovivo-landing/

---

## 💡 Dica Pro

Após configurar tudo, cada vez que você fizer:
```bash
git push origin main
```

O deploy acontece **automaticamente** em 2-5 minutos. Sem trabalho manual! 🎉

---

## 🆘 Precisa de Ajuda?

1. Verifique os logs em Actions tab
2. Consulte: `GITHUB_PAGES_CONFIG_STEPS.md` para guia detalhado
3. Consulte: `DEPLOY_CHECKLIST.md` para checklist rápido

---

**✨ Pronto para começar? Acesse o primeiro link e configure! ✨**

