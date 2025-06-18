export var user = localStorage.getItem("user");
export var admin = JSON.parse(localStorage.getItem("admin")) || false;
export var token = localStorage.getItem("token");

