FROM cypress/base:latest

WORKDIR /home/cypress/

RUN apt-get update && apt install -y default-jre

# Copia apenas package.json e lock primeiro (melhor cache)
COPY package.json package-lock.json ./

# Instala dependências (inclui Cypress)
RUN npm install

# Garante que o binário está instalado
RUN npx cypress install

# Agora copia o resto do projeto
COPY . .

VOLUME [ "/home/cypress/allure-report" ]

CMD ["npm", "run", "test:allure"]
