package main

import "github.com/gin-gonic/gin"
import "github.com/gin-contrib/cors"

func main() {
    r := gin.Default()

    r.Use(cors.Default())

    r.GET("/list/", func(c *gin.Context) {
        result := ListFiles("")
        
        c.JSON(200, gin.H{
            "code": 200,
            "result": result,
        })
    })

    r.GET("/list/:node", func(c *gin.Context) {
        node := c.Param("node")
        result := ListFiles(node)
        
        c.JSON(200, gin.H{
            "code": 200,
            "result": result,
        })
    })

    r.GET("/token", func(c *gin.Context) {
        token := CreateUploadToken()

        c.JSON(200, gin.H{
            "code": 200,
            "result": token,
        })
    })
    r.Run() // listen and serve on 0.0.0.0:8080
}