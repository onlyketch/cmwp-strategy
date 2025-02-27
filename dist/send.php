<?php
        $to = "andrey.samoilenko@cmwp.ru";
        $subject = 'Новая заявка на стажировку';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Фамилия и имя: '.$_POST['fio'].'</p>
                        <p>Название ВУЗа: '.$_POST['university'].'</p>
                        <p>Курс: '.$_POST['course'].'</p>
                        <p>Направление обучения: '.$_POST['direction'].'</p>
                        <p>Год выпуска (будущего): '.$_POST['year'].'</p>
                        <p>Когда сможешь приступить к стажировке: '.$_POST['when'].'</p>
                        <p>Какое направление тебе интересно: '.$_POST['vector'].'</p>
                        <p>Номер телефона: '.$_POST['phone'].'</p>                                        
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Стажировка CMWP <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
?>