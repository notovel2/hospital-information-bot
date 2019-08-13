package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	fmt.Println("system started")
	http.HandleFunc("/test", test)
	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}

func test(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "test")
}
