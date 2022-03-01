var Minio = require('minio')
const crypto = require("crypto");

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: '192.168.11.80',
    port: 9000,
    useSSL: false,
    accessKey: 'vps-borey',
    secretKey: 'vps-borey'
});
const sampledata = [
    "D:\\Loki.S01E05.1080p.WEB.H264-EXPLOIT[rarbg]\\Loki.S01E05.1080p.WEB.H264-EXPLOIT.mkv",
    "D:\\Software\\CentOS-7-x86_64-DVD-2009.iso",
    "D:\\Software\\kickstart.cfg",
    "D:\\Software\\ubuntu-18.04.6-desktop-amd64.iso",
    "D:\\Software\\windows11.wim",
    "D:\\Software\\boot.iso",

]
 
let metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}

const fPutObjectv2  = (bucketname,path, metadata) => {
    return new Promise((resolve, reject) => {
        const filename = `${path.split(/[\\\/]/).pop().split(/[\\\/]/).pop()}-${crypto.randomUUID()}`
        minioClient.fPutObject(bucketname,filename ,path, (err, objInfo) => {
            if (err) {
                return reject(err);
            }
            resolve({...objInfo, filename});
        });
    });
};


// fPutObjectv2('vps', sampledata[2])
// .then((objInfo) => console.log("Success", objInfo))
// .catch((err) => console.log(err))
// const testpm = async () => {
// }

// testpm()
// const proArr  = sampledata.forEach((x) => fPutObjectv2('vps', x))
// Promise.all(proArr)
// .then((x) => console.log(x))
// .catch((err) => console.log(err))

// let proArr2 = []
// for(let i=0; i<5000; i++){
//     proArr2.push(fPutObjectv2('vps', sampledata[2]))
// }
// Promise.all(proArr2)
// .then((rsp)=> {
//     rsp.forEach((e) => console.log(e))
//     console.log(`${rsp.length} items has uploaded`)
// })
// .catch((err) => console.log(err))
// .finally((rsp) => console.log)

const set = 5;
const rep = 5000;
const main = async () => {
    let total = 0;
    for(let i=0; i<set; i++) {
        let pendingUploads = []
        for(let j=0; j<rep; j++){
            pendingUploads.push(fPutObjectv2('vps', sampledata[2]))
        }
        await Promise.all(pendingUploads)
        .then((rsp) => {
            // rsp.forEach((e) => console.log(e.filename))
            console.log(`200 OK: ${rsp.length} items`)
            total += rsp.length
        })
        .catch((err) => console.log(err))
        .finally(() => {
            console.log(`${total} ITEMS UPLOADED`)
        })
    }
}

main()