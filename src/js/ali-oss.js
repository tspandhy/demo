let OSS = require('ali-oss')

let client = new OSS({
    region:"oss-cn-shenzhen",
    secure:true,
    accessKeyId:"LTAIarQDMFsj8UFk",
    accessKeySecret:"0jJtwiuUFdRX/GX3zouIs5f50/Y=",
    bucket:""
})

export const put = async (ObjName,fileUrl)=>{
    try {
        let result = await client.put(ObjName,fileUrl)
        return result
    } catch (error) {
        console.log(error)
    }
}

// 保证唯一性 名称
export const getFileNameUUID = () => {  
    function rx() {    
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)  
    }  
    return `${+new Date()}_${rx()}${rx()}`
  }
  

// 上传成功之后，转换真实的地址
export const signatureUrl= async (ObjName) => {    
    try {        
      let result = await client.signatureUrl(`${ObjName}`)    
      return result  
    } catch (e) {    
      console.log(e)  
    }
  }
