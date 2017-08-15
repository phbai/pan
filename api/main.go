package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()

    result := ListFiles()

    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "code": 200,
            "result": result,
        })
    })
    r.Run() // listen and serve on 0.0.0.0:8080
}