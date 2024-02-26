
/***
 * 
 *  1.选择图片后就会得到file文件对象
 *  2.new FileReader()对象，准备对文件进行取
 *  3.利用第三方库 browser-image-resizer (基于canvas 和 web workers 来实现图像压缩) 的readAndCompressImage方法，
 *    对file文件进行压缩和调整，readAndCompressImage(file.tempFiles<临时路径和图片大小>，confing)
 *  4.将压缩调整后的图片传入filReader对象的readAsDataURL方法。
 *  5.用filReader对象的onload方法进行读取，读取后生成base64格式，传递给后端接口
 *  6.上传成功了，调用查询接口进行图片回填 
 * 
 * 
*/

// const config = {
//     quality: 0.5,
//     maxWidth: 1080,
//     maxHeight: 1920,
//     debug: true,
//   };
//   const handleSelect = async (e: any) => {
//     handleSelectNumber.value = 0;
//     if(e && e.tempFiles.length > 0){
//       handleSelectValues.value = e.tempFiles;
//       handleSelectAsync();
//     }
//   };
//   const handleSelectAsync = ()=>{
//     let file = handleSelectValues.value[handleSelectNumber.value].file;
//     let reader = new FileReader();
//     readAndCompressImage(file, config).then((resizedImage) => {
//       reader.readAsDataURL(resizedImage);
//       reader.onload = (res) => {
//         uploadFileByBase64({ groupId: props.modelValue, base64: res.target?.result })
//           .then((res: any) => {
//             emit('update:modelValue', res.data);
//             initFileList();
//             if(handleSelectNumber.value < handleSelectValues.value.length-1){
//               handleSelectNumber.value++;
//               handleSelectAsync();
//             }
//           })
//           .catch((error) => {
//             uni.showToast({
//               icon: 'none',
//               title: '文件上传失败',
//             });
//             let index = fileList.value.length;
//             if (index !== 0) {
//               index = length - 1;
//             }
//             filePicker.value.clearFiles(index);
//         });
//       };
//     }).catch((err:any)=>{
//       console.log("err",err)
//     })
//   };
