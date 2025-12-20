# Security Notes

## GitHub Personal Access Token

⚠️ **IMPORTANTE:** Nunca commite tokens ou credenciais no repositório!

### Se você tem um GitHub Personal Access Token:

1. **Para GitHub Pages com Actions:**
   - Você NÃO precisa do token - o GitHub fornece automaticamente `GITHUB_TOKEN`
   - O workflow `.github/workflows/deploy.yml` já está configurado corretamente

2. **Se precisar usar o token (ex: para outras automações):**
   - Armazene como GitHub Secret: Settings > Secrets and variables > Actions > New repository secret
   - Nome: `GH_PAT` (ou outro nome apropriado)
   - Valor: cole o token
   - Use no workflow com: `${{ secrets.GH_PAT }}`

3. **Se o token foi exposto acidentalmente:**
   - Revogue imediatamente: GitHub Settings > Developer settings > Personal access tokens
   - Gere um novo token se necessário

### Boas Práticas:

- ✅ Use GitHub Secrets para variáveis sensíveis
- ✅ Nunca commite `.env` com tokens reais
- ✅ Use `.env.example` como template (sem valores reais)
- ✅ Revogue tokens expostos imediatamente
- ✅ Use tokens com escopo mínimo necessário

