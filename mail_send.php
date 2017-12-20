<? header('Content-Type: text/html; charset=UTF-8'); ?>
<?
	include_once('inc2/PHPMailer/PHPMailerAutoload.php');

    $sender = $_POST['sender'];
    $sender_name = $_POST['sender_name'];
    $receiver = $_POST['receiver'];
    $receiver_name = $_POST['receiver_name'];
    $content = $_POST['content'];

    /** 파라미터 값의 입력 여부 검사 */
    // 보내는 사람과 받는 사람의 이름은 미필수 항목으로 처리함

    /** 메일 발송 기능 초기화 */
    $mail = new PHPMailer();
    //$mail->SMTPDebug = 3;
    $mail->CharSet = "utf-8";
    $mail->Encoding = "base64";
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ljykimc159@gmail.com';
    $mail->Password = 'dlwn6437';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->isHTML(true);

    /** 보내는 사람 정보 설정 */
    $mail->From = $sender;
    $mail->FromName = $sender_name;

    /** 받는 사람 정보 설정 */
    $mail->addAddress($receiver, $receiver_name);

    /** 제목과 내용 */
    $mail->Subject = '';
    $mail->Body = $content;

    /** 발송 및 발송 결과 처리 */
    $is_mail_send_ok = $mail->send();

    if (!$is_mail_send_ok) {
        echo '메일 발송에 실패했습니다.<br />';
        echo 'Mailer Error: '.$mail->ErrorInfo;
    } else {
        echo '메일이 발송되었습니다.';
    }
?>