docker run \
  -p 9000:9000 \
  -p 9001:9001 \
  --name minio \
  -v /mnt/data1:/data1 \
  -v /mnt/data2:/data2 \
  -v /mnt/data3:/data3 \
  -v /mnt/data4:/data4 \
  quay.io/minio/minio server /data{1...4} --console-address ":9001"