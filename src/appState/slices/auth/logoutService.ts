import ThunkService from "@/services/thunkService";

const { postService: logoutService } = new ThunkService("logout");

export default logoutService;
