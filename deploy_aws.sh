#/bin/bash

echo "############ Logando na AWS ############"
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/d3u7h2u1

echo "\n############ Buildando imagem e enviando pro ECR ############"
docker build -t online-cinema .
docker tag online-cinema:latest public.ecr.aws/d3u7h2u1/online-cinema:latest
docker push public.ecr.aws/d3u7h2u1/online-cinema:latest

echo "\n############ Mudando a permissão da chave privada ############"
chmod 600 .ssh/online-cinema-key.pem

echo "\n############ Logando via ssh na EC2 e rodando o novo container ############"
ssh -i .ssh/online-cinema-key.pem ec2-user@3.137.173.45 'sudo docker pull public.ecr.aws/d3u7h2u1/online-cinema:latest \
&& sudo docker rm -f api \
&& sudo docker run -d --name api --env-file .env -p 80:3000 public.ecr.aws/d3u7h2u1/online-cinema:latest \
&& echo "\n############ Rodando as migrations ############" \
&& docker exec api yarn migrate:up \
&& exit'

echo "\n############ Fim do deploy ############"
