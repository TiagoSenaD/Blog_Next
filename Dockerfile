# Estágio de desenvolvimento (Development Stage)
FROM node:20-alpine AS development

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependência para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências (dentro do contêiner!)
RUN npm install

# Copia o restante do código fonte
COPY . .

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar a aplicação Next.js em modo de desenvolvimento
CMD ["npm", "run", "dev"]