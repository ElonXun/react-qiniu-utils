/*
  简单上传(表单post方式)
  详情:https://developer.qiniu.com/kodo/manual/1272/form-upload
*/
export const uploadPicture = (file,token,newFileName,successCallBack)=>{
  const formData = new FormData()
  formData.append('token', token)
  formData.append('key', newFileName)
  formData.append('file', file)

  var uri = 'http://upload.qiniu.com'
  return fetch(uri, {
    method: 'post',
    'Content-Type': 'multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq',
    body: formData,
  }).then((response) => response.json())
}