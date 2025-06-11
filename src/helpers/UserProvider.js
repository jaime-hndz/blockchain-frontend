import Cookies from "universal-cookie";

const cookies = new Cookies();
export var user = localStorage.getItem("user");

export var token = cookies.get("token");