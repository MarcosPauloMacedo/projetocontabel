<?php

$host = 'localhost';
$userName = 'root';
$senha = '';
$bancoDados = 'cnaesimples';

$conexao = new mysqli($host,$userName,$senha,$bancoDados);

if($conexao->connect_errno){
    echo 'error';
}
else{
    echo 'funcionando';
}

