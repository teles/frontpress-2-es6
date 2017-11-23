# FrontPress 2

FrontPress 2 core version made with pure ES6.

## ES6 puro

Recriar o core do FrontPress usando apenas javascript puro (ES6) permitirá que ele seja extendido para se adequar a quaisquer novos frameworks, como VueJS, React, Aurélia ou Angular.

## Abandono da versão 1 da API Wordpress

A versão 1 da API Wordpress deverá ser abandonada em benefício da versão 2.

## Arquitetura planejada

A arquitetura básica consiste em:

## Classe principal configurável

Será necessário criar uma classe principal a ser configurada pelo usuário desse projeto.
A informação básica que essa classe precisa para ser inicializada é a url do endpoint base do blog Wordpress.

## Entidades principais

* Post
* Categoria
* Tag
* Midia
* Usuário

## Cada entidade tem:

* Uma classe dedicada exclusivamente a requisitar endpoints. É a única classe no sistema que conhece endereços de endpoints.

* Um adapter. Esse adapter deve ser capaz de transformar o retorno da API em um objeto com determinados atributos.

* Um repository. Esse repository será capaz de cachear o conteúdo vindo do endpoint, conversando com classe de API e adapter. 
O repository irá trabalhar como um servidor de informações da entidade com métodos como "getCategoryById" ou "getMediaUrlById".    

## $cacheFactory

É preciso descobrir como substituir o cacheFactory do AngularJS por ES6. Isso será usado nos repositories.

## Teste unitário

* Cobertura de 85% ou mais.

## Primeiros passos:

* Criação do esqueleto do projeto com suporte a ES6 usando babel.
* Criação do adapter de post.
* Criação da classe de API para o endpoint de posts. 
* Criação do repository de posts.