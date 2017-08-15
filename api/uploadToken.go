package main

import (
    "github.com/qiniu/api.v7/auth/qbox"
    "github.com/qiniu/api.v7/storage"
)

func CreateUploadToken() string {
    putPolicy := storage.PutPolicy{
            Scope: Bucket,
    }
    mac := qbox.NewMac(AccessKey, SecretKey)
    upToken := putPolicy.UploadToken(mac)
    return upToken
}