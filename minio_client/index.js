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
const targetbucket = 'vps'
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

const fGetObjectv2 = (bucketname, filename, out_dir) => {
    return new Promise((resolve, reject) => {
        minioClient.fGetObject(bucketname, filename, out_dir, function(err) {
            if (err) {
              return reject(err)
            }
            resolve("sucess")
        })
    })
}

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
            pendingUploads.push(fPutObjectv2(targetbucket, sampledata[2]))
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
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}
const listAllObject = () => {
    var stream = minioClient.listObjectsV2(targetbucket,'', true,'')
    let cnt = 0
    stream.on('data', function(obj) { 
        cnt += 1
        (cnt % 1000 === 0) && console.log(cnt,obj.name)
        cnt > 1300000 && console.log(cnt)
    } )
}

const getOneObject = () => {
    minioClient.fGetObject(targetbucket, 'kickstart.cfg-00f01d99-718b-48f9-a6d8-4c9ace0ff9fa', './ks1.txt', function(err) {
        if (err) {
          return console.log(err)
        }
        console.log('success')
    })
}
const sampleArr= [
'kickstart.cfg-7ea50be9-7446-4960-ab65-de039ecc08f3',  'kickstart.cfg-0ca6ee79-3fb7-4410-999c-bd914b26b9f0',
'kickstart.cfg-681c5709-62bd-493d-b29c-474ba6e4264c',  'kickstart.cfg-cbcdcfef-ac93-4a00-acc9-2d85fcc002e6',
'kickstart.cfg-00dafb09-a540-410a-9351-f9d5a14d6159',  'kickstart.cfg-f33d41d3-4d2a-475d-baeb-f12a509b4b1f',
'kickstart.cfg-4e65fa96-bd81-4353-bc35-9fe4ed5d90c5',  'kickstart.cfg-fdac480b-a9fb-4077-b4fb-20f0be13c0fe',
'kickstart.cfg-ec07a23e-70a2-4e72-915f-1a7da20958db',  'kickstart.cfg-19601340-3619-42c5-8b3c-d49104e56c92',
'kickstart.cfg-4c5fdb6f-be5c-4979-b28a-8bb882ed9512',  'kickstart.cfg-034f2068-9765-4cc3-bc59-7ffc05666b45',
'kickstart.cfg-2dc04eeb-13c1-4d07-b376-9cf02168055f',  'kickstart.cfg-eeb9b463-3d04-4629-bfc7-cc51c9fbe97e',
'kickstart.cfg-3056ba64-1e39-47f7-a2a3-c57f72fad1c7',  'kickstart.cfg-00f630c3-7788-4744-a6f3-ec0f4753be25',
'kickstart.cfg-6c40ad4b-1ca7-4586-a475-2ad20617030d',  'kickstart.cfg-45f03b0a-a2b0-4017-aac0-113b859e7d07',
'kickstart.cfg-a1aa9cc2-9db0-4628-bb38-03328c3d0493',  'kickstart.cfg-5edc0311-a4d9-4def-a5fa-85bcb7228685',
'kickstart.cfg-0441ffc5-ebf7-4437-872b-6e214704617f',  'kickstart.cfg-bdffeb14-091c-40df-8302-e2d16d2b7700',
'kickstart.cfg-4466c180-2bd1-44ab-8b70-6e9a7838f83b',  'kickstart.cfg-f1cb0e46-ccaf-4517-bb9d-a5d0fc36e406',
'kickstart.cfg-e6f1fea3-3a42-4501-a035-0a47e18d43e2',  'kickstart.cfg-18332e62-d5e5-44ff-89fd-beba724a4ee1',
'kickstart.cfg-51f35ef4-76fa-45f5-bfbb-2eebbc6b0aad',  'kickstart.cfg-61854e6d-6b85-4a48-be1d-af344a673ffe',
'kickstart.cfg-401ba435-2292-4c17-832b-447cb9c0353c',  'kickstart.cfg-64258a13-4c7e-488e-98e9-ac4787cc2dbb',
'kickstart.cfg-198d2ce4-177f-48cb-bb23-2100e172f6e9',  'kickstart.cfg-292a9f1b-b760-4584-82c5-f0dcaa7a1a93',
'kickstart.cfg-130a0665-9e42-49da-80df-064bfa4a659d',  'kickstart.cfg-19711783-4054-496a-a924-650781e865ba',
'kickstart.cfg-d1184938-1443-4a04-8661-9585226de04b',  'kickstart.cfg-54281d86-bb34-4214-867f-1e62066c765c',
'kickstart.cfg-7212cea1-d015-4c08-bb5c-395b27f00a1b',  'kickstart.cfg-13bc42dd-05ab-4197-aea8-99fe7b0d03e1'
]
const getArrObject = async () => {
    console.log('Arr:', sampleArr.length)
    const proArr = sampleArr.forEach((x) => fGetObjectv2(targetbucket,x,`./rsvfiles/${x}.txt`))
    const rsp = await Promise.all(proArr)
    console.log(rsp.length)
    return rsp
}
// stream.on('error', function(err) { console.log(err) } )
// console.log("object total", stream.on())
// main()
// getOneObject()
// getArrObject()
// .catch((err) => console.log(err))
fGetObjectv2(targetbucket, 'windows11.wim', './rsvfiles/s.wim')
.then((stats) => console.log(stats))
.catch((err) => console.log(err))