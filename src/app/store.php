<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->msgName) === '' || (trim($request->data->text)=== '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $msgName = mysqli_real_escape_string($con, trim($request->data->msgName));
  $text = mysqli_real_escape_string($con, (int)$request->data->text);
    

  // Store.
  $sql = "INSERT INTO `masseges`(`id`,`text`,`price`) VALUES (null,'{$msgName}','{$text}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $message = [
      'msgName' => $msgName,
      'text' => $text,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$message]);
  }
  else
  {
    http_response_code(422);
  }
}