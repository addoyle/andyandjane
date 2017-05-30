<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
/*    $to = implode(';', array(
        //'gingingray@yahoo.com',
        'andy.d.doyle@gmail.com'
    ));
    $subject = 'RSVP for '.$_POST['guest_name'].'!';
    $headers = "From: Andy-And-Jane.com <rsvp@andy-and-jane.com>\r\n"
             . "Reply-To: Andy-And-Jane.com <rsvp@andy-and-jane.com>\r\n"
             . "MIME-Version: 1.0\r\n"
             . "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $message = '<html><body>'
             . '<h2>RSVP Received!</h2>'
             . '<h3>'
                 . $_POST['guest_title'] . ' ' . $_POST['guest_name']
                 . ($_POST['plusone_name']
                     ? ' & ' . $_POST['plusone_title'] . ' ' . $_POST['plusone_name']
                     : '') 
                 . ' are '
                 . ($_POST['rsvp'] == 'yes' ? 'attending!' : 'not attending.')
             . '</h3>'
             . '<h4>Message to us:</h4>'
             . '<p>' . ($_POST['message'] ? $_POST['message'] : '<em>No message.</em>') . '</p>'
             . '</body></html>';

    mail($to, $subject, $message, $headers);
*/

    $json = json_decode(file_get_contents('./guests.json'), true);

    $json[] = $_POST;

    file_put_contents('./guests.json', json_encode($json));

} else {
    $redirect_url = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'];
    header("Location: $redirect_url", true, 301);
}

?>

SUCCESS
