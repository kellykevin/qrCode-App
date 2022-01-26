const qrCode =  require ('qrcode')

const generateQr = async text => {
    try{
            console.log(await qrCode.toDataURL(text))
    }
    catch(error){
        console.log(err)
    }
}

generateQr("http://google.com")