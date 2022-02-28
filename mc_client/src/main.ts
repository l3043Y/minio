import './style.css'
const Minio = import('minio')

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Minio.Client({
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
minioClient.fPutObject('vps', 'lokie4', sampledata[0], metaData, function(err, objInfo) {
  if(err) {
      return console.log(err)
  }
  console.log("Success", objInfo.etag, objInfo.versionId)
})