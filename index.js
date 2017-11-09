/*
  简单上传(表单post方式) 详情:https://developer.qiniu.com/kodo/manual/1272/form-upload
  参数: token => 七牛上传凭证
      file  =>  要上传的文件
      newFileName =>  新的文件名
  teturn => promise
*/
export const uploadPicture = (file,token,newFileName)=>{
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