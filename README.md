<h1> Projeto Fim do módulo 4 - Dentista API</h1>
<p>API criada à partir das operações CRUD, para administração informações de profissionais dentistas. A API foi feita utilizando a linguagem Node.js.<p>


<h1> Bibliotecas utilizadadas:</h1>

- Express para criar servidor;<br>
- SQLite3 para criar banco de dados;<br>
- Nodemon auxílio no servidor;<br>
- Supertest e jest para aplicação dos teste.<br>
<br>
As bibliotecas foram instaladas colocando os seguentes comando no terminal:

- npm init para criar arquivo package com as informações do projeto;
- npm i express;
- npm i sqlite3;
- npm i nodemon -D;
- npm i supertest.
- npm i jest;
<br><br>
Para rodar o sistema foi criado no script do arquivo package o scrpit dev, que com o comando npm run dev, roda o sistema com o nodemon.

<h1>Rodando as rotas CRUD</h1>

<h3>Get All</h3>
<p> Utilizando o endereço localhost:3333/dentista no insomnima na opção GET é possível ver todos os dados incluidos no banco de dados. </p>
<p >
<p>Processo é feito conforme foto abaixo!</p>
  <img alt="getALL" title="#getALL" src="./screenshotsInsomnia/getAll.JPG" />
</p>
<h3>Get pesquisa pelo CRO</h3>
<p> Utilizando o endereço localhost:3333/dentista/CRO no insomnima na opção GET é possível ver todos os dentista com o CRO informado </p>
<p>Processo é feito conforme foto abaixo!</p>
<img alt="getBusca" title="#getBusca" src="./screenshotsInsomnia/getBusca.JPG" />
<br>
<h3>POST</h3>
<p> Utilizando o endereço localhost:3333/dentista no insomnima na opção POST, indo a opção body e escolhendo json e incluindo no corpo os dados que deseja, é possível incluir dados no banco de dados  </p>
<p>Processo é feito conforme foto abaixo!</p>
<img alt="post" title="#post" src="./screenshotsInsomnia/post.JPG" />
<br>
<h3>DELETE</h3>
<p> Utilizando o endereço localhost:3333/dentista/CRO no insomnima na opção DELETE, é possível excluir do banco de dados o cadastro que possui o CRO informado   </p>
<p>Processo é feito conforme foto abaixo!</p>
<img alt="delete" title="#delete" src="./screenshotsInsomnia/delete.JPG" />
<br>
<h3>PUT</h3>
<p> Utilizando o endereço localhost:3333/dentista/CRO no insomnima na opção PUT,indo a opção body e escolhendo json e incluindo no corpo os dados que deseja alterar Assim, os dados do CRO informado serão alterado no banco de dados.   </p>
<p>Processo é feito conforme foto abaixo!</p>
<img alt="put" title="#put" src="./screenshotsInsomnia/put.JPG" />

<h1>Testes</h1>
<p>O testes são aplicados utilizando as bibliotecas supertest e jest.</p>
<p> São feitos conforme imagens a seguir.<p>
<p>Para testar a rota GET All, que mostra todos os usuários, utilizei o seguninte código.</p>
<img alt="delete" title="#delete" src="./screenshotsInsomnia/testeGetAll.JPG" />
<br><br><br>
<p>Para testar a rota POST, que mostra todos os usuários, utilizei o seguninte código</p>
<img alt="delete" title="#delete" src="./screenshotsInsomnia/testePost.JPG" />
<br><br>
<p>Como resultado dos teste foi obtido</p>
<img alt="delete" title="#delete" src="./screenshotsInsomnia/resultadoTeste.JPG" />




