package main

import (
    "fmt"

    "github.com/qiniu/api.v7/auth/qbox"
    "github.com/qiniu/api.v7/storage"
)

func ListFiles(prefix string) []storage.ListItem {
    mac := qbox.NewMac(AccessKey, SecretKey)

    cfg := storage.Config{
        // 是否使用https域名进行资源管理
        UseHTTPS: false,
    }
    // 指定空间所在的区域，如果不指定将自动探测
    // 如果没有特殊需求，默认不需要指定
    //cfg.Zone=&storage.ZoneHuabei
    bucketManager := storage.NewBucketManager(mac, &cfg)

    limit := 1000
    // prefix := prefix
    delimiter := ""

    fmt.Println(prefix)
    //初始列举marker为空
    marker := ""
    var result []storage.ListItem;

    for {
        entries, _, nextMarker, hashNext, err := bucketManager.ListFiles(Bucket, prefix, delimiter, marker, limit)
        if err != nil {
            fmt.Println("list error,", err)
            break
        }
        //print entries
        for _, entry := range entries {
            result = append(result, entry)
        }
        if hashNext {
            marker = nextMarker
        } else {
            //list end
            break
        }
    }

    return result
}
