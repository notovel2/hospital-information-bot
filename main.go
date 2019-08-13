package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	fmt.Println("system started")
	http.HandleFunc("/test", test)
	runServer()
}

func runServer() {
	port := os.Getenv("PORT")
	fmt.Println("running on port ", port)
	http.ListenAndServe(":"+port, nil)
}

func test(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "test")
}
