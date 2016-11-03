<?php
$name = $_POST['form_data'][0]['Name'];
$email = $_POST['form_data'][0]['Email'];
$subject = $_POST['form_data'][0]['Subject'];
$service = $_POST['form_data'][0]['Service'];
$message = $_POST['form_data'][0]['Message'];
$action = $_POST['action'];

$char = '';
$cont = 0;

foreach(str_split($message) as $char){
    if($tmp == $char){
        $cont++;
    } else {
        if($cont < 4){
            $cont = 0;
        }
    }
    $tmp = $char;
}

if($cont <4){
    
    $message = "$service\n\nNome: $name \nEmail: $email\n ------------------------------------------ \n\n$message \r\n";
    $message = wordwrap($message, 250, "\r\n");

    switch ($subject) {
        case 0:
            $subject = 'Orçamento - '.$service;
            $sendTo = 'orcamento@eletricvale.com.br';
            break;
        case 1:
            $subject = 'Financeiro';
            $sendTo = 'financeiroev@eletricvale.com.br';
            break;
        case 2:
            $subject = 'Compras';
            $sendTo = 'compras@eletricvale.com.br';
            break;
        case 3:
            $subject = 'Suporte';
            $sendTo = 'suporte@eletricvale.com.br';
            break;
        case 4:
            $subject = 'Outros';
            $sendTo = "contato@eletricvale.com.br";
            break;
        default:
            $sendTo = "contato@eletricvale.com.br";
    }

    if ($action == 'contact') {
        if ($name == "" || $email == "" || $message == "") {
            echo "Ocorreu um problema no cadastro do seu e-mail. Por favor verifique os campos obrigatórios ou tente mais tarde!";
            $action = 'Contato - site';
            exit();
        }
    } else if ($action == 'newsletter') {
        if ($email == "") {
            echo "Ocorreu um problema no cadastro do seu e-mail. Por favor verifique se foi escrito corretamente ou tente mais tarde!";
            $message = "Novo newsletter cadastrano: $email";
            exit();
        } else {
            $subject = 'Email Cadastrado';
        }
    } else if ($action == 'comment') {
        $subject = 'Novo comentário!';
    }

        if(mail($sendTo, $action.' :: '.$subject, $message)){
            echo "Sua solicitação foi enviada com sucesso!!!";
        } else {
            echo "Ocorreu um pequeno problema ao enviar o E-Mail, por favor tente mais tarde.";
        }
    } else {
         echo 'Desculpe, não foi possível enviar esta mensagem!';
    }

?>
