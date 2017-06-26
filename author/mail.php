<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email
    '])&&$_POST['message']!="")){
        $to = 'lencick@inbox.ru';
        $subject = 'Обратный звонок';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>
                        <p>email: '.$_POST['email'].'</p>                        
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        mail($to, $subject, $message, $headers);
}
?>